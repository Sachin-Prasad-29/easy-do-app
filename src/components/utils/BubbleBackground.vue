<template>
    <div class="container bubblecontainer">
        <div class="bubble-wrap">
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
            <div class="bubble"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BubbleBackground',
}
</script>

<style scoped>
html,
body {
    height: 100%;
}
body {
    background: black;
    min-height: 100%;
    
    overflow: hidden;
}
@keyframes move {
    100% {
        transform: translate3d(0, 0, -1000px);
    }
}
.container {
    position: absolute;
    opacity: 0.4;
    width: 100%;
    min-height: 100%;
    transform-style: preserve-3d;
}
.bubble-wrap {
    margin: 0 auto;
    width: 200px;
    height: 500px;
    transform-style: preserve-3d;
    transform-origin: center center;
    perspective: 120px;
}
.bubble {
    position: absolute;
    background: black;
    opacity: 1;
    border-radius: 50%;
    animation: move 5s infinite;
}
.bubble:nth-child(1) {
    height: 25px;
    width: 25px;
    animation-delay: -0.2s;
    transform: translate3d(794px, 999px, 866px);
    background: #03A9F4;
}
.bubble:nth-child(2) {
    height: 19px;
    width: 19px;
    animation-delay: -0.4s;
    transform: translate3d(199px, 66px, 660px);
    background: #03A9F4;
}
.bubble:nth-child(3) {
    height: 25px;
    width: 25px;
    animation-delay: -0.6s;
    transform: translate3d(660px, 925px, 1645px);
    background: #03A9F4;
}
.bubble:nth-child(4) {
    height: 26px;
    width: 26px;
    animation-delay: -0.8s;
    transform: translate3d(524px, 887px, 516px);
    background: #03A9F4;
}
.bubble:nth-child(5) {
    height: 11px;
    width: 11px;
    animation-delay: -1s;
    transform: translate3d(538px, 110px, 1085px);
    background: #03A9F4;
}
.bubble:nth-child(6) {
    height: 21px;
    width: 21px;
    animation-delay: -1.2s;
    transform: translate3d(79px, 229px, 638px);
    background: #03A9F4;
}
.bubble:nth-child(7) {
    height: 2px;
    width: 2px;
    animation-delay: -1.4s;
    transform: translate3d(969px, 188px, 856px);
    background: #03A9F4;
}
.bubble:nth-child(8) {
    height: 18px;
    width: 18px;
    animation-delay: -1.6s;
    transform: translate3d(950px, 292px, 1965px);
    background: #03A9F4;
}
.bubble:nth-child(9) {
    height: 16px;
    width: 16px;
    animation-delay: -1.8s;
    transform: translate3d(313px, 90px, 221px);
    background: #03A9F4;
}
.bubble:nth-child(10) {
    height: 12px;
    width: 12px;
    animation-delay: -2s;
    transform: translate3d(892px, 309px, 918px);
    background: #03A9F4;
}
.bubble:nth-child(11) {
    height: 3px;
    width: 3px;
    animation-delay: -2.2s;
    transform: translate3d(56px, 596px, 1669px);
    background: #03A9F4;
}
.bubble:nth-child(12) {
    height: 11px;
    width: 11px;
    animation-delay: -2.4s;
    transform: translate3d(252px, 633px, 559px);
    background: #03A9F4;
}
.bubble:nth-child(13) {
    height: 26px;
    width: 26px;
    animation-delay: -2.6s;
    transform: translate3d(126px, 890px, 986px);
    background: #03A9F4;
}
.bubble:nth-child(14) {
    height: 14px;
    width: 14px;
    animation-delay: -2.8s;
    transform: translate3d(183px, 855px, 1586px);
    background: #03A9F4;
}
.bubble:nth-child(15) {
    height: 10px;
    width: 10px;
    animation-delay: -3s;
    transform: translate3d(808px, 336px, 723px);
    background: #03A9F4;
}
.bubble:nth-child(16) {
    height: 30px;
    width: 30px;
    animation-delay: -3.2s;
    transform: translate3d(193px, 101px, 264px);
    background: #03A9F4;
}
.bubble:nth-child(17) {
    height: 27px;
    width: 27px;
    animation-delay: -3.4s;
    transform: translate3d(211px, 108px, 53px);
    background: #03A9F4;
}
.bubble:nth-child(18) {
    height: 18px;
    width: 18px;
    animation-delay: -3.6s;
    transform: translate3d(260px, 204px, 162px);
    background: #03A9F4;
}
.bubble:nth-child(19) {
    height: 1px;
    width: 1px;
    animation-delay: -3.8s;
    transform: translate3d(260px, 230px, 85px);
    background: #03A9F4;
}
.bubble:nth-child(20) {
    height: 15px;
    width: 15px;
    animation-delay: -4s;
    transform: translate3d(903px, 167px, 539px);
    background: #03A9F4;
}
.bubble:nth-child(21) {
    height: 27px;
    width: 27px;
    animation-delay: -4.2s;
    transform: translate3d(123px, 137px, 1185px);
    background: #03A9F4;
}
.bubble:nth-child(22) {
    height: 23px;
    width: 23px;
    animation-delay: -4.4s;
    transform: translate3d(154px, 904px, 1504px);
    background: #03A9F4;
}
.bubble:nth-child(23) {
    height: 5px;
    width: 5px;
    animation-delay: -4.6s;
    transform: translate3d(379px, 717px, 1303px);
    background: #03A9F4;
}
.bubble:nth-child(24) {
    height: 1px;
    width: 1px;
    animation-delay: -4.8s;
    transform: translate3d(456px, 645px, 1944px);
    background: #03A9F4;
}
.bubble:nth-child(25) {
    height: 27px;
    width: 27px;
    animation-delay: -5s;
    transform: translate3d(32px, 356px, 1913px);
    background: #03A9F4;
}
.bubble:nth-child(26) {
    height: 5px;
    width: 5px;
    animation-delay: -5.2s;
    transform: translate3d(791px, 750px, 1983px);
    background: #b526d9;
}
.bubble:nth-child(27) {
    height: 11px;
    width: 11px;
    animation-delay: -5.4s;
    transform: translate3d(598px, 566px, 787px);
    background: #2688d9;
}
.bubble:nth-child(28) {
    height: 23px;
    width: 23px;
    animation-delay: -5.6s;
    transform: translate3d(332px, 63px, 842px);
    background: #26d98b;
}
.bubble:nth-child(29) {
    height: 25px;
    width: 25px;
    animation-delay: -5.8s;
    transform: translate3d(44px, 946px, 1729px);
    background: #bbd926;
}
.bubble:nth-child(30) {
    height: 15px;
    width: 15px;
    animation-delay: -6s;
    transform: translate3d(163px, 781px, 1225px);
    background: #d926d0;
}
.bubble:nth-child(31) {
    height: 6px;
    width: 6px;
    animation-delay: -6.2s;
    transform: translate3d(844px, 548px, 229px);
    background: #d92671;
}
.bubble:nth-child(32) {
    height: 8px;
    width: 8px;
    animation-delay: -6.4s;
    transform: translate3d(940px, 985px, 1859px);
    background: #8826d9;
}
.bubble:nth-child(33) {
    height: 9px;
    width: 9px;
    animation-delay: -6.6s;
    transform: translate3d(630px, 806px, 837px);
    background: #d98026;
}
.bubble:nth-child(34) {
    height: 13px;
    width: 13px;
    animation-delay: -6.8s;
    transform: translate3d(466px, 135px, 231px);
    background: #26b5d9;
}
.bubble:nth-child(35) {
    height: 24px;
    width: 24px;
    animation-delay: -7s;
    transform: translate3d(375px, 792px, 442px);
    background: #26d95c;
}
.bubble:nth-child(36) {
    height: 10px;
    width: 10px;
    animation-delay: -7.2s;
    transform: translate3d(175px, 928px, 1074px);
    background: #d926d6;
}
.bubble:nth-child(37) {
    height: 20px;
    width: 20px;
    animation-delay: -7.4s;
    transform: translate3d(708px, 269px, 1003px);
    background: #d94426;
}
.bubble:nth-child(38) {
    height: 7px;
    width: 7px;
    animation-delay: -7.6s;
    transform: translate3d(611px, 760px, 1423px);
    background: #d92680;
}
.bubble:nth-child(39) {
    height: 21px;
    width: 21px;
    animation-delay: -7.8s;
    transform: translate3d(957px, 305px, 286px);
    background: #d96226;
}
.bubble:nth-child(40) {
    height: 1px;
    width: 1px;
    animation-delay: -8s;
    transform: translate3d(566px, 654px, 1136px);
    background: #26d982;
}
.bubble:nth-child(41) {
    height: 24px;
    width: 24px;
    animation-delay: -8.2s;
    transform: translate3d(801px, 252px, 161px);
    background: #4126d9;
}
.bubble:nth-child(42) {
    height: 3px;
    width: 3px;
    animation-delay: -8.4s;
    transform: translate3d(407px, 389px, 336px);
    background: #d98026;
}
.bubble:nth-child(43) {
    height: 17px;
    width: 17px;
    animation-delay: -8.6s;
    transform: translate3d(414px, 317px, 179px);
    background: #5626d9;
}
.bubble:nth-child(44) {
    height: 12px;
    width: 12px;
    animation-delay: -8.8s;
    transform: translate3d(107px, 104px, 1249px);
    background: #2647d9;
}
.bubble:nth-child(45) {
    height: 6px;
    width: 6px;
    animation-delay: -9s;
    transform: translate3d(63px, 703px, 416px);
    background: #d926a0;
}
.bubble:nth-child(46) {
    height: 15px;
    width: 15px;
    animation-delay: -9.2s;
    transform: translate3d(92px, 409px, 1588px);
    background: #71d926;
}
.bubble:nth-child(47) {
    height: 27px;
    width: 27px;
    animation-delay: -9.4s;
    transform: translate3d(857px, 562px, 1714px);
    background: #d9d326;
}
.bubble:nth-child(48) {
    height: 16px;
    width: 16px;
    animation-delay: -9.6s;
    transform: translate3d(93px, 354px, 960px);
    background: #c4d926;
}
.bubble:nth-child(49) {
    height: 27px;
    width: 27px;
    animation-delay: -9.8s;
    transform: translate3d(894px, 578px, 1183px);
    background: #8e26d9;
}
.bubble:nth-child(50) {
    height: 16px;
    width: 16px;
    animation-delay: -10s;
    transform: translate3d(209px, 442px, 317px);
    background: #26d938;
}
.bubble:nth-child(51) {
    height: 2px;
    width: 2px;
    animation-delay: -10.2s;
    transform: translate3d(499px, 122px, 705px);
    background: #d9d926;
}
.bubble:nth-child(52) {
    height: 13px;
    width: 13px;
    animation-delay: -10.4s;
    transform: translate3d(431px, 814px, 1898px);
    background: #4dd926;
}
.bubble:nth-child(53) {
    height: 17px;
    width: 17px;
    animation-delay: -10.6s;
    transform: translate3d(579px, 419px, 822px);
    background: #03A9F4;
}
.bubble:nth-child(54) {
    height: 13px;
    width: 13px;
    animation-delay: -10.8s;
    transform: translate3d(816px, 691px, 1097px);
    background: #03A9F4;
}
.bubble:nth-child(55) {
    height: 6px;
    width: 6px;
    animation-delay: -11s;
    transform: translate3d(244px, 690px, 1691px);
    background: #03A9F4;
}
.bubble:nth-child(56) {
    height: 14px;
    width: 14px;
    animation-delay: -11.2s;
    transform: translate3d(207px, 313px, 1613px);
    background: #03A9F4;
}
.bubble:nth-child(57) {
    height: 3px;
    width: 3px;
    animation-delay: -11.4s;
    transform: translate3d(837px, 992px, 156px);
    background: #03A9F4;
}
.bubble:nth-child(58) {
    height: 12px;
    width: 12px;
    animation-delay: -11.6s;
    transform: translate3d(292px, 704px, 714px);
    background: #03A9F4;
}
.bubble:nth-child(59) {
    height: 26px;
    width: 26px;
    animation-delay: -11.8s;
    transform: translate3d(620px, 356px, 1475px);
    background: #03A9F4;
}
.bubble:nth-child(60) {
    height: 17px;
    width: 17px;
    animation-delay: -12s;
    transform: translate3d(134px, 801px, 340px);
    background: #03A9F4;
}
.bubble:nth-child(61) {
    height: 17px;
    width: 17px;
    animation-delay: -12.2s;
    transform: translate3d(6px, 83px, 326px);
    background: #03A9F4;
}
.bubble:nth-child(62) {
    height: 12px;
    width: 12px;
    animation-delay: -12.4s;
    transform: translate3d(18px, 1000px, 1912px);
    background: #d97426;
}
.bubble:nth-child(63) {
    height: 18px;
    width: 18px;
    animation-delay: -12.6s;
    transform: translate3d(225px, 751px, 678px);
    background: #7d26d9;
}
.bubble:nth-child(64) {
    height: 6px;
    width: 6px;
    animation-delay: -12.8s;
    transform: translate3d(455px, 76px, 1007px);
    background: #d9b526;
}
.bubble:nth-child(65) {
    height: 30px;
    width: 30px;
    animation-delay: -13s;
    transform: translate3d(328px, 644px, 312px);
    background: #03A9F4;
}
.bubble:nth-child(66) {
    height: 19px;
    width: 19px;
    animation-delay: -13.2s;
    transform: translate3d(924px, 245px, 1725px);
    background: #03A9F4;
}
.bubble:nth-child(67) {
    height: 26px;
    width: 26px;
    animation-delay: -13.4s;
    transform: translate3d(631px, 700px, 1280px);
    background: #26d9d9;
}
.bubble:nth-child(68) {
    height: 15px;
    width: 15px;
    animation-delay: -13.6s;
    transform: translate3d(968px, 148px, 849px);
    background: #d926c4;
}
.bubble:nth-child(69) {
    height: 24px;
    width: 24px;
    animation-delay: -13.8s;
    transform: translate3d(694px, 326px, 986px);
    background: #26d9cd;
}
.bubble:nth-child(70) {
    height: 17px;
    width: 17px;
    animation-delay: -14s;
    transform: translate3d(598px, 659px, 1729px);
    background: #26d9bb;
}
.bubble:nth-child(71) {
    height: 8px;
    width: 8px;
    animation-delay: -14.2s;
    transform: translate3d(391px, 341px, 1169px);
    background: #2691d9;
}
.bubble:nth-child(72) {
    height: 30px;
    width: 30px;
    animation-delay: -14.4s;
    transform: translate3d(524px, 625px, 600px);
    background: #d9d626;
}
.bubble:nth-child(73) {
    height: 2px;
    width: 2px;
    animation-delay: -14.6s;
    transform: translate3d(705px, 335px, 1052px);
    background: #03A9F4;
}
.bubble:nth-child(74) {
    height: 13px;
    width: 13px;
    animation-delay: -14.8s;
    transform: translate3d(267px, 33px, 1463px);
    background: #26d9bb;
}
.bubble:nth-child(75) {
    height: 25px;
    width: 25px;
    animation-delay: -15s;
    transform: translate3d(474px, 592px, 1497px);
    background: #03A9F4;
}
.bubble:nth-child(76) {
    height: 13px;
    width: 13px;
    animation-delay: -15.2s;
    transform: translate3d(182px, 535px, 978px);
    background: #b8d926;
}
.bubble:nth-child(77) {
    height: 13px;
    width: 13px;
    animation-delay: -15.4s;
    transform: translate3d(351px, 661px, 1487px);
    background: #03A9F4;
}
.bubble:nth-child(78) {
    height: 6px;
    width: 6px;
    animation-delay: -15.6s;
    transform: translate3d(276px, 966px, 1146px);
    background: #03A9F4;
}
.bubble:nth-child(79) {
    height: 1px;
    width: 1px;
    animation-delay: -15.8s;
    transform: translate3d(52px, 393px, 723px);
    background: #26a0d9;
}
.bubble:nth-child(80) {
    height: 23px;
    width: 23px;
    animation-delay: -16s;
    transform: translate3d(303px, 296px, 639px);
    background: #b2d926;
}
.bubble:nth-child(81) {
    height: 6px;
    width: 6px;
    animation-delay: -16.2s;
    transform: translate3d(970px, 996px, 1435px);
    background: #26d9a9;
}
.bubble:nth-child(82) {
    height: 15px;
    width: 15px;
    animation-delay: -16.4s;
    transform: translate3d(70px, 356px, 674px);
    background: #03A9F4;
}
.bubble:nth-child(83) {
    height: 7px;
    width: 7px;
    animation-delay: -16.6s;
    transform: translate3d(429px, 756px, 817px);
    background: #d926af;
}
.bubble:nth-child(84) {
    height: 12px;
    width: 12px;
    animation-delay: -16.8s;
    transform: translate3d(755px, 602px, 1689px);
    background: #5c26d9;
}
.bubble:nth-child(85) {
    height: 2px;
    width: 2px;
    animation-delay: -17s;
    transform: translate3d(776px, 234px, 1511px);
    background: #2680d9;
}
.bubble:nth-child(86) {
    height: 1px;
    width: 1px;
    animation-delay: -17.2s;
    transform: translate3d(311px, 931px, 1685px);
    background: #d9267d;
}
.bubble:nth-child(87) {
    height: 28px;
    width: 28px;
    animation-delay: -17.4s;
    transform: translate3d(664px, 561px, 663px);
    background: #7426d9;
}
.bubble:nth-child(88) {
    height: 26px;
    width: 26px;
    animation-delay: -17.6s;
    transform: translate3d(10px, 251px, 233px);
    background: #26a9d9;
}
.bubble:nth-child(89) {
    height: 20px;
    width: 20px;
    animation-delay: -17.8s;
    transform: translate3d(608px, 667px, 703px);
    background: #afd926;
}
.bubble:nth-child(90) {
    height: 19px;
    width: 19px;
    animation-delay: -18s;
    transform: translate3d(680px, 913px, 1066px);
    background: #d9269d;
}
.bubble:nth-child(91) {
    height: 20px;
    width: 20px;
    animation-delay: -18.2s;
    transform: translate3d(680px, 503px, 1521px);
    background: #26d9cd;
}
.bubble:nth-child(92) {
    height: 24px;
    width: 24px;
    animation-delay: -18.4s;
    transform: translate3d(674px, 304px, 1093px);
    background: #d9268e;
}
.bubble:nth-child(93) {
    height: 25px;
    width: 25px;
    animation-delay: -18.6s;
    transform: translate3d(798px, 608px, 464px);
    background: #26d962;
}
.bubble:nth-child(94) {
    height: 7px;
    width: 7px;
    animation-delay: -18.8s;
    transform: translate3d(113px, 323px, 103px);
    background: #c726d9;
}
.bubble:nth-child(95) {
    height: 6px;
    width: 6px;
    animation-delay: -19s;
    transform: translate3d(653px, 572px, 12px);
    background: #8ed926;
}
.bubble:nth-child(96) {
    height: 21px;
    width: 21px;
    animation-delay: -19.2s;
    transform: translate3d(803px, 253px, 402px);
    background: #d9263e;
}
.bubble:nth-child(97) {
    height: 23px;
    width: 23px;
    animation-delay: -19.4s;
    transform: translate3d(258px, 146px, 1723px);
    background: #8ed926;
}
.bubble:nth-child(98) {
    height: 1px;
    width: 1px;
    animation-delay: -19.6s;
    transform: translate3d(781px, 639px, 457px);
    background: #8026d9;
}
.bubble:nth-child(99) {
    height: 4px;
    width: 4px;
    animation-delay: -19.8s;
    transform: translate3d(398px, 543px, 752px);
    background: #29d926;
}
.bubble:nth-child(100) {
    height: 25px;
    width: 25px;
    animation-delay: -20s;
    transform: translate3d(546px, 185px, 179px);
    background: #d926a9;
}
</style>
