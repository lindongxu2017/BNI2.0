/* eslint-disable no-new */
import axios from 'axios'
import qs from 'qs'
// import api from './api.js'
import { Toast } from 'vant'

var myfn = {
    ajax(method, data, url, fn, error) {
        // 
        data.store_id = 13
        axios({
            method, data, url, params: data,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'token': localStorage.access_token
            }
        }).then(res => {
            this.statusCode(res, fn)
        }).catch(res => {
            console.log(res)

        })
    },
    // 服务器返回状态
    statusCode(res, fn) {
        var self = this
        switch (parseInt(res.data.code)) {
            case 1:
                fn(res.data)
                break
            case 9999:
                // 未登录
                console.log(res.data)
                localStorage.removeItem('access_token')
                myfn.login()
                // location.href = location.protocol + '//' + location.host

                break
            case 9998:
                // 没权限
                fn(res.data)

                break
            case 9997:
                // 没有会员权限
                fn(res.data)
                break
            case 9996:
                // 微信code为空
                fn(res.data)
                break
            case 0:
                // 其他正常错误
                Toast(res.data.msg)
                break
            case 1000:
                // 系统错误
                fn(res.data)
                break
            default:
                fn(res.data)

                // todo
                break
        }
    },

    // 公司公众号 登录

    getMyWxCode() {
        var url = location.protocol + '//' + location.host
        console.log(url);
        myfn.ajax('get', {
            redirect_uri: url,
            store_id: 13,
            platform: 'wechat'
        }, "api/user/createAuthorizeUrl", res => {
            // return
            location.href = res.data
        })
    },

    // 客户公众号 登录

    getWxCode() {
        // location.href = location.origin + '/api/user/createAuthorizeUrl?platform=wechat&redirect_uri='+escape(location.origin)+'&store_id=13'
        // location.href = 'http://dev-manage.haosailei.cn/wechat/redirect?url=' + escape(location.href) // getCode
        var url = location.protocol + '//' + location.host
        console.log(url);
        myfn.ajax('get', {
            redirect_uri: url,
            store_id: 13,
        }, "api/user/createauthorizeurl", res => {
            // return
            // location.href = res.data
            console.log(res)
        })
    },

    login() {
        if (localStorage.access_token) {
            this.getUserInfo()
            return
        }
        let code = this.GetQueryString('code')
        let state = this.GetQueryString('state')
        if (code) {
            this.ajax('POST', {
                code, state, platform: 'wechat', store_id: 13
            }, "api/user/third", res => {
                localStorage.access_token = res.data.userinfo.token
                location.href = location.protocol + '//' + location.host
            })
        } else {
            // this.getWxCode()
            this.getMyWxCode()
        }
    },

    getUserInfo() {
        this.ajax('GET', {}, 'api/user/user_info', res => {
            localStorage.userinfo = JSON.stringify(res.data)
        })
    },

    wxconfig() {
        if (this.GetQueryString('params')) {
            console.log(this.GetQueryString('params'))
            location.href = location.protocol + '//' + window.location.host + '/#' + this.GetQueryString('params')
            return
        }
        this.ajax('POST', {
            url: window.location.href
        }, api.own.config, res => {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.data.appid, // 必填，公众号的唯一标识
                timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.data.noncestr, // 必填，生成签名的随机串
                signature: res.data.signature,// 必填，签名
                jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareQZone', 'onMenuShareWeibo'] // 必填，需要使用的JS接口列表
            });
            wx.error(function (res) {
                console.log(res)
            });
            // this.wxShareList()
        })
    },

    getProductDetail(path, id) {
        this.ajax('GET', { id }, '/Api/Goods/detail', res => {
            this.wxShareList(path, res.data.name, res.data.appalbum[0].imgurl)
        })
    },

    wxShareList(path, title, url) {
        var title = title ? title : 'JQW聚齐文化'
        var desc = title ? '点击查看详情' : '点击了解JQW旗下赛事信息'
        var link = window.location.href.split('/#/')[0] + '?params=' + (path != '' ? path : '/' + location.href.split('/#/')[1])
        // console.log(link)
        var imgUrl = url ? url : ''
        wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
            wx.updateAppMessageShareData({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 设置成功
                }
            })
            wx.updateTimelineShareData({
                title: title, // 分享标题
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 设置成功
                }
            })
            wx.onMenuShareQZone({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 设置成功
                }
            })
            wx.onMenuShareWeibo({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 设置成功
                }
            })
        });
    },

    GetQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) return unescape(r[2]); return ''
    },
    wxPay(info) {
        function onBridgeReady() {
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest',
                {
                    "appId": info.data.appId,     //公众号名称，由商户传入     
                    "timeStamp": info.data.timeStamp,         //时间戳，自1970年以来的秒数     
                    "nonceStr": info.data.nonceStr, //随机串     
                    "package": info.data.package,
                    "signType": "MD5",         //微信签名方式：     
                    "paySign": info.data.paySign //微信签名 
                },
                function (res) {
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        // 使用以上方式判断前端返回,微信团队郑重提示：
                        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                    }
                }
            );
        }
        if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
            } else if (document.attachEvent) {
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
            }
        } else {
            onBridgeReady();
        }
    }
}

export default myfn