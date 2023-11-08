"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1284],{956063:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-44b70c26","path":"/devices/E1524_E1810.html","title":"IKEA E1524/E1810 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E1524/E1810 control via MQTT","description":"Integrate your IKEA E1524/E1810 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-09-08T21:16:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Troubleshooting: no battery level OR not sending messages at all","slug":"troubleshooting-no-battery-level-or-not-sending-messages-at-all","link":"#troubleshooting-no-battery-level-or-not-sending-messages-at-all","children":[]},{"level":3,"title":"Troubleshooting: Device didn\'t respond to OTA request","slug":"troubleshooting-device-didn-t-respond-to-ota-request","link":"#troubleshooting-device-didn-t-respond-to-ota-request","children":[]},{"level":3,"title":"Troubleshooting: Automations triggered by button presses throw exceptions","slug":"troubleshooting-automations-triggered-by-button-presses-throw-exceptions","link":"#troubleshooting-automations-triggered-by-button-presses-throw-exceptions","children":[]},{"level":3,"title":"Binding","slug":"binding","link":"#binding","children":[]},{"level":3,"title":"Toggle button","slug":"toggle-button","link":"#toggle-button","children":[]},{"level":3,"title":"OTA updates troubleshooting","slug":"ota-updates-troubleshooting","link":"#ota-updates-troubleshooting","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1699471136000},"filePathRelative":"devices/E1524_E1810.md"}')},102309:(e,t,o)=>{o.r(t),o.d(t,{default:()=>O});var i=o(166252);const n=(0,i._)("h1",{id:"ikea-e1524-e1810",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ikea-e1524-e1810","aria-hidden":"true"},"#"),(0,i.Uk)(" IKEA E1524/E1810")],-1),r=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"E1524/E1810")],-1),a=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"TRADFRI remote control")],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, action, linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E1524-E1810.jpg",alt:"IKEA E1524/E1810"})])],-1),h=(0,i.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Pair the remote to Zigbee2MQTT by holding it close to the coordinator and pressing the inside button, next to the CR2032 battery, 4 times in 5s. The red light on the (front of the) remote will now flash a few times.</p><h3 id="troubleshooting-no-battery-level-or-not-sending-messages-at-all" tabindex="-1"><a class="header-anchor" href="#troubleshooting-no-battery-level-or-not-sending-messages-at-all" aria-hidden="true">#</a> Troubleshooting: no battery level OR not sending messages at all</h3>',4),c=(0,i.uE)('<h3 id="troubleshooting-device-didn-t-respond-to-ota-request" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-didn-t-respond-to-ota-request" aria-hidden="true">#</a> Troubleshooting: Device didn&#39;t respond to OTA request</h3><p>To resolve the <code>Device didn&#39;t respond to OTA request</code> error, you can try to push a button on it, shortly before you start the update, to wake up the Remote.</p><h3 id="troubleshooting-automations-triggered-by-button-presses-throw-exceptions" tabindex="-1"><a class="header-anchor" href="#troubleshooting-automations-triggered-by-button-presses-throw-exceptions" aria-hidden="true">#</a> Troubleshooting: Automations triggered by button presses throw exceptions</h3><p>Make sure that automations that are triggered by the &#39;action&#39; attribute of the remote are not configured in the &#39;restart&#39; mode. Since there is an event for the button press (e.g. <code>arrow_left_click</code>) as well as for the release (e.g. <code>arrow_left_release</code>) the trigger will fire two times in rapid succession which may result in the automation being cancelled before it can finish its first run.</p><h3 id="binding" tabindex="-1"><a class="header-anchor" href="#binding" aria-hidden="true">#</a> Binding</h3>',5),g=(0,i._)("ul",null,[(0,i._)("li",null,"< 2.3.014: binding is not supported, OTA update your device to get binding functionallity"),(0,i._)("li",null,[(0,i.Uk)("2.3.014 - 2.3.074: suppports binding to groups only. It can only be bound to 1 group at a time. By default this remote is bound to the default bind group which you first have to unbind it from. This can be done by sending to "),(0,i._)("code",null,"zigbee2mqtt/bridge/request/device/unbind"),(0,i.Uk)(" payload "),(0,i._)("code",null,'{"from": "DEVICE_FRIENDLY_NAME", "to": "default_bind_group"}'),(0,i.Uk)(". Wake up the device right before sending the commands by pressing a button on it.")]),(0,i._)("li",null,"2.3.075 and greater : supports binding to devices only")],-1),b=(0,i._)("p",null,[(0,i._)("strong",null,"Note:"),(0,i.Uk)(" Prior to sending a 'bind' command using an MQTT message directly or through the frontend, push a button on the remote to wake it up. Otherwise, the remote will not be in a receiving state and the bind will fail with a general 'error'.")],-1),p={href:"https://github.com/Koenkk/zigbee2mqtt/issues/1232",target:"_blank",rel:"noopener noreferrer"},m=(0,i._)("li",null,[(0,i.Uk)("Create a group with ID "),(0,i._)("strong",null,"65289"),(0,i.Uk)(" (name it ie. Trafri_scenes) and add the device(s) you control with the remote.")],-1),_=(0,i._)("li",null,"Once you click left/right on the remote, the scenes will be called sequentially (should there be a device off sync in scenes, hold the toggle button for 3 sec.).",-1),f=(0,i._)("h3",{id:"toggle-button",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#toggle-button","aria-hidden":"true"},"#"),(0,i.Uk)(" Toggle button")],-1),k=(0,i._)("code",null,'{"click": "toggle"}',-1),y=(0,i._)("strong",null,"also",-1),w=(0,i._)("code",null,'{"click": "toggle_hold"}',-1),v=(0,i._)("code",null,"toggle",-1),T={href:"https://github.com/Koenkk/zigbee2mqtt/issues/2077#issuecomment-538691885",target:"_blank",rel:"noopener noreferrer"},E=(0,i._)("h3",{id:"ota-updates-troubleshooting",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates-troubleshooting","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates troubleshooting")],-1),q=(0,i._)("p",null,"If you have problems with running firmware update, try following:",-1),U=(0,i._)("ol",null,[(0,i._)("li",null,'after clicking "Updare firmware" button in Z2M, click every 1-2s any of control buttons on remote'),(0,i._)("li",null,"if remote keeps aborting firmware update, then try with fresh battery and also you can try to reset device (press pair button next to battery 4 times in 5s period)")],-1),x=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),A=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),I=(0,i.uE)('<ul><li><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>arrow_left_click</code>, <code>arrow_left_hold</code>, <code>arrow_left_release</code>, <code>arrow_right_click</code>, <code>arrow_right_hold</code>, <code>arrow_right_release</code>, <code>brightness_down_click</code>, <code>brightness_down_hold</code>, <code>brightness_down_release</code>, <code>brightness_up_click</code>, <code>brightness_up_hold</code>, <code>brightness_up_release</code>, <code>toggle</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),N={},O=(0,o(983744).Z)(N,[["render",function(e,t){const o=(0,i.up)("RouterLink"),N=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[r,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[a,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=IKEA"},{default:(0,i.w5)((()=>[(0,i.Uk)("IKEA")])),_:1})])]),s,d,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,i._)("p",null,[(0,i.Uk)("It may help to remove the battery for a few seconds and after that reconfigure it via "),(0,i.Wm)(o,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqttbridgeconfigure"},{default:(0,i.w5)((()=>[(0,i.Uk)("Configure")])),_:1}),(0,i.Uk)(". Right before executing the Configure make sure to wake up the device by pressing a button on it.")]),c,(0,i._)("p",null,[(0,i.Uk)("The "),(0,i.Wm)(o,{to:"/guide/usage/binding.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("binding")])),_:1}),(0,i.Uk)(" functionallity of this remote varies per firmware version:")]),g,b,(0,i._)("p",null,[(0,i.Uk)("Once bound to a group/bulb you will notice that the toggle and brightness buttons will work, but scenes/color temperature most likely won't work. This appears to be a missing piece of functionality ("),(0,i._)("a",p,[(0,i.Uk)("discussion"),(0,i.Wm)(N)]),(0,i.Uk)("), but via a workaround this can be managed;")]),(0,i._)("ol",null,[m,(0,i._)("li",null,[(0,i.Uk)("Add/store "),(0,i.Wm)(o,{to:"/guide/usage/scenes.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("scenes")])),_:1}),(0,i.Uk)(" for the created group")]),_]),f,(0,i._)("p",null,[(0,i.Uk)("When clicking the middle (center) button on the remote it will send a "),k,(0,i.Uk)(", when holding it it will "),y,(0,i.Uk)(" send a "),w,(0,i.Uk)(". It is not possible to skip the "),v,(0,i.Uk)(" when the button is hold. Also the remote won't send anything when the button is released. See "),(0,i._)("a",T,[(0,i.Uk)("link"),(0,i.Wm)(N)]),(0,i.Uk)(" for more details.")]),E,q,U,(0,i.kq)(" Notes END: Do not edit below this line "),x,(0,i._)("p",null,[(0,i.Uk)("This device supports OTA updates, for more information see "),(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[(0,i.Uk)("OTA updates")])),_:1}),(0,i.Uk)(".")]),A,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),I])}]])}}]);