(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{508:function(t,e,r){"use strict";r.r(e);var o=r(356),c=r(407),n=r(400),d=r(409),m=r(410),h=r(415),l=r(411),f=r(412),$=r(417),y=r(418),C=r(413),k=r(414),v={components:{ConfirmedCasesDetailsCard:d.a,TestedCasesDetailsCard:m.a,ConfirmedCasesNumberCard:h.a,ConfirmedCasesAttributesCard:l.a,TestedNumberCard:f.a,TelephoneAdvisoryReportsNumberCard:$.a,ConsultationDeskReportsNumberCard:y.a,MetroCard:C.a,AgencyCard:k.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=o.inspections_summary.date;break;case"details-of-tested-cases":title=this.$t("検査実施状況"),t=o.inspection_status_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=o.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=o.patients.date;break;case"number-of-tested":title=this.$t("検査実施数"),t=o.inspections_summary.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=o.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=o.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),t=c.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),t=n.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),o="".concat(this.updatedAt," | ").concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものです。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("東京都")+" "+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")},{hid:"description",name:"description",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},w=r(5),component=Object(w.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"details-of-tested-cases"==this.$route.params.card?e("tested-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?e("metro-card"):"agency"==this.$route.params.card?e("agency-card"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);