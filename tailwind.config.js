/** @type {import('tailwindcss').Config} */
// import { tw } from 'twind'
// export default {
//   install: (app) => {
//     app.config.globalProperties.tw = tw
//   },
// }
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',
    './plugins/**/*.{js,ts}',
    './assets/**/*.{css,scss}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#141414',
        line: '#2b2b2b',
        sort: '#6a13bf',
        switch: '#1ac0ff',
        count: '#ff2727',
        time: '#00dcff',
        packageLabel: '#6fbaf3',
        serialFont: '#ffe017',
        switchLine: '#2075e3',
        switchTextDisable: '#717171',
        DepositCompleteColor: '#49CC97',
        DepositCompleteBorder: '#707070',
        navColor: '#8c8c8c',
        navColorHover: '#00dfb9',
        navBgHover: '#28252b',
        gold: '#ffd500',
        silver: '#cd9cff',
        footerTipsBg: '#242030',
        footerTipsText: '#9b75cc',
        footerText: '#afa0be',
        footerCooperateBg: '#1a1721',
        switchLabelBg: '#261637',
        switchBg: '#3d215b',
        switchMobileBg: '#66349a',
        serviceBg: '#242424',
        serviceActiveBg: '#191919',
        lineBg: '#2dbc58',
        menuLine: '#7c41ab',
        coverBg: '#070707',
        opacityBlack: 'rgba(0, 0, 0, 0)',
        bannerBg: '#a246ff',
        detailDataBg: '#0a0a0a',
        coinColor: '#6a6273',
        coinLine: '#4b4651',
        gameDetailBack: '#24ffda',
        violet: '#AFA0BE',
        purple: '#B084FF',
        purpleLine: '#48424E',
        presentGold: '#E8DA7D',
        codeBox: '#211F23',
        codeBoxGray: '#211F23',
        codeBoxPurple: '#4C4256',
        nicknameBorder: '#7A4BAA',
        inputHolder: '#735E8A',
        depositBg: '#342f39',
        depositColor: '#7a6394',
        depositPopBg: '#522694',
        depositPopLine: '#544860',
        depositNonCheckColor: '#625a6d',
        depositInputBg: '#2c2730',
        depositInputLine: '#544f5b',
        depositOrdernoTips: '#ffde72',
        skeletonBgColor: '#28252b',
        eventDisableBgColor: '#242030',
        enentDisableTextColor: '#48f365',
        enentLabelBgColor: '#4d00a5',
        enentLabelTextColor: '#cd9cff',
        chatroomBg: '#1c1a1e',
        chatroomText: '#87739b',
        chatroomMessageDate: '#917fa2',
        chatroomMessageBg: '#362f51',
        chatroomMessageBg2: '#5e518d',
        chatroomSearchBg: '#1d1b1e',
        chatroomUnreadBg: '#ff1957',
        inputActiveBorder: '#7A4BAA',
        loginBg: '#28252b',
        centerGold: '#FFD500',
        centerLevelExp: '#6a6273',
        centerExpPercentBar: '#232323',
        centerIntroduceCode: '#A246FF',
        popupBg: '#242030',
        centerGridDisabled: '#51455E',
        centerGridText: '#9B75CC',
        confirmBtn: '#48424E',
        confirmBtnText: '#877B94',
        centerInputBg: '#161517',
        breadcrumb: '#00dfb9',
        breadcrumbTitle: '#484241',
        breadcrumbBorder: '#38333D',
        frameUse: '#8B4EC8',
        frameHas: '#1A181C',
        frameHasText: '#776F7E',
        giftHint: '#6A6273',
        giftBtnInactive: '#51455E',
        giftWalletPanel: '#151316',
        giftWalletGold: '#FFDE72',
        giftCoinChoice: '#393431',
        giftQuickButton: '#6B0CCC',
        giftQuickButtonActive: '#430085',
        giftPackingGold: '#FFE711',
        recordMaskStartText: '#1accba',
        recordMaskLockText: '#9378ff',
        centerFloatBorder: '#403847',
        centerFloatClose: '#423E47',
        centerFloatText: '#AFA0BE',
        centerEditPressed: '#66349A',
        eventMaskBg: '#070707cc',
        sevenDayItemBorder: '#e6e6e6',
        sevenDayItemBg: '#403648',
        sevenDayItemTodayBg: '#febf2c',
        sevenDayItemSigned: '#b623ff',
        walletTipBg: '#1e1c20',
        walletBg: '#3f1865',
        walletAdd: '#d672ff',
        walletGameCount: '#9e9e9e',
        dropDownBlueBg: '#595292',
        dropDownBlueHoverBg: '#201b46',
        dropDownBlueHoverText: '#9d97d5',
        dropDownBluePop: '#3e3870',
        recordTableHeader: '#39334b',
        recordTableGold: '#ffdd57',
        recordTableSilver: '#cebcf5',
        recordPager: '#403957',
        recordPagerDisabled: '#332D44',
        choseAvatarItem: '#9a1aef',
        test: '#00ff00',
      },

      backgroundImage: {
        gameNav: 'linear-gradient(180deg, #a136e8 0%, #6100c2 100%)',
        depositBtn: 'linear-gradient(90deg, #a136e8 0%, #6100c2 100%)',
        btn: 'linear-gradient(90deg,#226fe4 0,#00b9d6)',
        link: 'linear-gradient(90deg, #1fc969 0, #33cf21)',
        header: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 90%)',
        greenLakeBtn: 'linear-gradient(90deg,#0082E5,#46AEAE)',
        purpleBtn: 'linear-gradient(90deg,#6100C2,#A136E8)',
        redBtn: 'linear-gradient(90deg, #FF4060 0%, #6E4EF2 100%)',
        ordernoBtn: 'linear-gradient(270deg, #FF4060 0%, #6E4EF2 100%)',
        grayBtn: 'linear-gradient(90deg, #3F3747 0%, #50455B 100%)',
        depositBtnBg: 'linear-gradient(90deg, #6E4EF2 0%, #20F3CF 100%)',
        depositDifferenceBg: 'linear-gradient(90deg, #FF006F 0%, #FFCC00 100%)',
        depositDifferenceTipsBg: 'linear-gradient(90deg, #FF006F 0%, #EE0000 100%)',
        completeIconBg: 'linear-gradient(0deg, #6E4EF2 0%, #20F3CF 100%)',
        blurPurpleBtn: 'linear-gradient(90deg, #362BD2 0%, #B636FF 100%)',
        centerBg: 'linear-gradient(180deg, #141414 0%, #242030 100%)',
        centerPercentBar: 'linear-gradient(90deg, #AB34EF 0%, #2D0098 100%)',
        giftBtnBg: 'linear-gradient(90deg, #6E4EF2 0%, #20F3CF 100%)',
        recordSearchBtn: 'linear-gradient(90deg, #6e42f2 0%, #20f3cf 100%)',
      },

      backgroundSize: {
        '150%': '150%',
      },

      border: {
        violet: '#AFA0BE',
      },

      maxHeight: {
        '360px': '360px',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
      },

      inset: theme => ({
        '100px': '100px',
        '118px': '118px',
        '132px': '132px',
        '158px': '158px',
        '264px': '264px',
        '1vw': '1vw',
        '95%': '95%',
      }),

      flex: {
        navFlex: '0 0 200px',
        '24px': '0 0 24px',
      },

      transitionDuration: {
        '.28s': '.28s',
      },

      scale: {
        28: '.28',
      },

      zIndex: {
        '-1': '-1',
        login: '30',
        nav: '20',
        mask: '21',
        contract: '31',
        dialog: '32',
        event: '40',
      },

      opacity: {
        '.08': '.08',
      },

      screens: {
        // 小手機尺寸 e.g iphone 6s
        xs: '321px',
        tablet: '750px',
      },

      translate: {
        top: '-4px',
      },

      boxShadow: {
        switchList: '0 10px 20px rgba(0, 0, 0, .3)',
        gameDetailIcon: '0 3px 6px rgba(0, 0, 0, .3)',
        sevenDayItemReward: '4px 5px 0 0 #6908ab',
      },

      animation: {
        'spin-slow': 'spin 3s linear infinite',
        bounce: 'bounce 4s ease-in-out infinite',
        scale: 'scale .38s ease-in-out',
      },

      keyframes: {
        bounce: {
          '0%, 75%': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)',
          },

          '0%, 80%, 88.25%, 100%': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0)',
          },

          '85%, 85.75%': {
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
          },

          '92.5%': {
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
          },

          '95%': {
            transitionTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
            transform: 'translate3d(0, 0, 0) scaleY(0.95)',
          },

          '97.5%': {
            transform: 'translate3d(0, -4px, 0) scaleY(1.02)',
          },
        },

        scale: {
          '0%, 10%': {
            transform: 'scale(0)',
          },

          '45%': {
            transform: 'scale(1.3)',
          },

          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}