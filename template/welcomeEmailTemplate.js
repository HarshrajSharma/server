module.exports = welcomeEmailTemplate = (fName, lName) => {




    return `
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="https://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
          
          <head>
           <meta charset="UTF-8" />
           <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
           <!--[if !mso]><!-->
           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
           <!--<![endif]-->
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="format-detection" content="telephone=no" />
           <meta name="format-detection" content="date=no" />
           <meta name="format-detection" content="address=no" />
           <meta name="format-detection" content="email=no" />
           <meta name="x-apple-disable-message-reformatting" />
           <link href="https://fonts.googleapis.com/css?family=Fira+Sans:ital,wght@0,100;1,100;0,200;1,200;0,300;1,300;0,400;1,400;0,500;1,500;0,600;1,600;0,700;1,700;0,800;1,800;0,900;1,900" rel="stylesheet" />
           <title>HamsterPilot Mail</title>
           <!--[if !mso]><!-- -->
           <style>
           @media  all {
                                                           /* cyrillic-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 400;
                           src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmojLazX3dGTP.woff2) format('woff2');
                           unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                       }
                       /* cyrillic */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 400;
                           src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
                           unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                       }
                       /* latin-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 400;
                           src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VvmYjLazX3dGTP.woff2) format('woff2');
                           unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                       }
                       /* latin */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 400;
                           src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
                           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                       }
                                               /* cyrillic-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 500;
                           src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSxf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                       }
                       /* cyrillic */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 500;
                           src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                       }
                       /* latin-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 500;
                           src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveSBf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                       }
                       /* latin */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 500;
                           src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
                           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                       }
                                               /* cyrillic-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 700;
                           src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSxf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                       }
                       /* cyrillic */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 700;
                           src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                       }
                       /* latin-ext */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 700;
                           src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eSBf6Xl7Gl3LX.woff2) format('woff2');
                           unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                       }
                       /* latin */
                       @font-face {
                           font-family: 'Fira Sans';
                           font-style: normal;
                           font-weight: 700;
                           src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
                           unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                       }
                                           }
           </style>
           <!--<![endif]-->
           <style>
           html,
                   body {
                       margin: 0 !important;
                       padding: 0 !important;
                       min-height: 100% !important;
                       width: 100% !important;
                       -webkit-font-smoothing: antialiased;
                   }
           
                   * {
                       -ms-text-size-adjust: 100%;
                   }
           
                   #outlook a {
                       padding: 0;
                   }
           
                   .ReadMsgBody,
                   .ExternalClass {
                       width: 100%;
                   }
           
                   .ExternalClass,
                   .ExternalClass p,
                   .ExternalClass td,
                   .ExternalClass div,
                   .ExternalClass span,
                   .ExternalClass font {
                       line-height: 100%;
                   }
           
                   div[style*="margin: 14px 0"],
                   div[style*="margin: 16px 0"] {
                       margin: 0 !important;
                   }
           
                   table,
                   td,
                   th {
                       mso-table-lspace: 0 !important;
                       mso-table-rspace: 0 !important;
                       border-collapse: collapse;
                   }
           
                   body, td, th, p, div, li, a, span {
                       -webkit-text-size-adjust: 100%;
                       -ms-text-size-adjust: 100%;
                       mso-line-height-rule: exactly;
                   }
           
                   img {
                       border: 0;
                       outline: none;
                       line-height: 100%;
                       text-decoration: none;
                       -ms-interpolation-mode: bicubic;
                   }
           
                   a[x-apple-data-detectors] {
                       color: inherit !important;
                       text-decoration: none !important;
                   }
           
                   .pc-gmail-fix {
                       display: none;
                       display: none !important;
                   }
           
                   @media (min-width: 621px) {
                       .pc-lg-hide {
                           display: none;
                       } 
           
                       .pc-lg-bg-img-hide {
                           background-image: none !important;
                       }
                   }
           </style>
           <style>
           @media (max-width: 620px) {
           .pc-project-body {min-width: 0px !important;}
           .pc-project-container {width: 100% !important;}
           .pc-sm-hide {display: none !important;}
           .pc-sm-bg-img-hide {background-image: none !important;}
           .pc-w620-padding-25-30-25-30 {padding: 25px 30px 25px 30px !important;}
           .pc-w620-padding-15-35-0-35 {padding: 15px 35px 0px 35px !important;}
           .pc-w620-padding-10-35-10-35 {padding: 10px 35px 10px 35px !important;}
           .pc-w620-padding-15-30-15-30 {padding: 15px 30px 15px 30px !important;}
           .pc-w620-padding-10-30-10-30 {padding: 10px 30px 10px 30px !important;}
           
           .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
           .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
           .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
           .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;}
           .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
           .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
           .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
           .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
           
           .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
           .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
           .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
           .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
           
           .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
           .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
           .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
           .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
           .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
           .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
           }
           @media (max-width: 520px) {
           .pc-w520-padding-25-25-25-25 {padding: 25px 25px 25px 25px !important;}
           .pc-w520-padding-15-30-0-30 {padding: 15px 30px 0px 30px !important;}
           .pc-w520-padding-10-30-10-30 {padding: 10px 30px 10px 30px !important;}
           .pc-w520-padding-15-25-15-25 {padding: 15px 25px 15px 25px !important;}
           .pc-w520-padding-10-25-10-25 {padding: 10px 25px 10px 25px !important;}
           }
           </style>
           <!--[if !mso]><!-->
           <style>
           @media all { @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 100; src: url('https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5Vn9LjHYTQ.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5Vn9LjHYTI.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 100; src: url('https://fonts.gstatic.com/s/firasans/v17/va9A4kDNxMZdWfMOD5VvkrCqUT7fdw.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9A4kDNxMZdWfMOD5VvkrCqUT7fcQ.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 200; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnWKneSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnWKneSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 200; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAGQCf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAGQCf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKreSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnPKreSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 300; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBiQyf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBiQyf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjN.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9E4kDNxMZdWfMOD5VvmYjL.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 400; src: url('https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5VvkrjHYTQ.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9C4kDNxMZdWfMOD5VvkrjHYTI.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnZKveSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 500; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrA6Qif2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrA6Qif2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnSKzeSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 600; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAWRSf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrAWRSf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnLK3eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnMK7eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 800; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBuRyf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBuRyf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 700; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrByRCf2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrByRCf2VFk.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: normal; font-weight: 900; src: url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnFK_eSBf8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9B4kDNxMZdWfMOD5VnFK_eSBf6.woff2') format('woff2'); } @font-face { font-family: 'Fira Sans'; font-style: italic; font-weight: 900; src: url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBKRif2VF8.woff') format('woff'), url('https://fonts.gstatic.com/s/firasans/v17/va9f4kDNxMZdWfMOD5VvkrBKRif2VFk.woff2') format('woff2'); } }
           </style>
           <!--<![endif]-->
           <!--[if mso]>
              <style type="text/css">
                  .pc-font-alt {
                      font-family: Arial, Helvetica, sans-serif !important;
                  }
              </style>
              <![endif]-->
           <!--[if gte mso 9]>
              <xml>
                  <o:OfficeDocumentSettings>
                      <o:AllowPNG/>
                      <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
              </xml>
              <![endif]-->
          </head>
          
          <body class="pc-font-alt" style="width: 100% !important;min-height: 100% !important;margin: 0 !important;padding: 0 !important;line-height: 1.5;color: #2D3A41;mso-line-height-rule: exactly;-webkit-font-smoothing: antialiased;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;font-variant-ligatures: normal;text-rendering: optimizeLegibility;-moz-osx-font-smoothing: grayscale;background-color: #f4f4f4;" bgcolor="#f4f4f4">
           <table class="pc-project-body" style="table-layout: fixed;min-width: 600px;background-color:#f4f4f4;" bgcolor="#f4f4f4" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
            <tr>
             <td align="center" valign="top">
              <table class="pc-project-container" style="width: 600px; max-width: 600px;" width="600" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
               <tr>
                <td style="padding: 20px 0px 20px 0px;" align="left" valign="top">
                 <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Logo -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-25-25-25-25 pc-w620-padding-25-30-25-30" style="padding: 25px 40px 25px 40px;border-radius: 0px;background-color: #1c1c1c;" bgcolor="#1c1c1c">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td align="center" valign="top">
                             <a class="pc-font-alt" href="https://hamsterpilot.com" target="_blank" style="text-decoration: none;">
                              <img src="https://hamsterpilot.com/static/media/LogoFull.f67ddff0a1e0a398867d.png" class="" width="200" height="50" alt="" style="display: block;border: 0;outline: 0;line-height: 100%;-ms-interpolation-mode: bicubic;width:200px;height: auto;max-width: 100%;" />
                             </a>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Logo -->
                   </td>
                  </tr>
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Subtitle -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-15-30-0-30 pc-w620-padding-15-35-0-35" style="padding: 15px 10px 0px 10px;border-radius: 0px;background-color: #ffffff;" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 133%;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-size: 25px;font-weight: bold;color: #434343;font-variant-ligatures: normal;">
                             <div><span>Welcome, ${fName} ${lName}</span>
                             </div>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Subtitle -->
                   </td>
                  </tr>
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Text -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-10-30-10-30 pc-w620-padding-10-35-10-35" style="padding: 10px 10px 10px 10px;border-radius: 0px;background-color: #ffffff;" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 140%;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-size: 18px;font-weight: normal;color: #333333;font-variant-ligatures: normal;">
                             <div><span>&#xFEFF;</span>
                             </div>
                             <div><span>&#xFEFF;</span>
                             </div>
                             <div>
                                  <span>We are glad you have choosen HamsterPilot Coin! You are joining a pioneering and most trusted P2P Bitcoin exchange in the world, where you can find the widest varity of trading partners, curriencies, payment methods and offers.</span>
                             </div>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Text -->
                   </td>
                  </tr>
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Button -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-15-25-15-25 pc-w620-padding-15-30-15-30" style="padding: 15px 40px 15px 40px;border-radius: 0px;background-color: #ffffff;" bgcolor="#ffffff">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td align="center">
                             <table class="pc-width-hug pc-w620-gridCollapsed-0" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr class="pc-grid-tr-first pc-grid-tr-last">
                               <td class="pc-grid-td-first pc-grid-td-last" valign="middle" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                  <td align="center" valign="middle">
                                   <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                     <td align="center" valign="top">
                                      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                       <tr>
                                        <th valign="top" align="center" style="font-weight: normal;line-height: 1;">
                                         <!--[if mso]>
                  <table  border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="border-collapse: separate;margin-right: auto; margin-left: auto;">
                      <tr>
                          <td valign="middle" align="center" style="text-align: center;color: #ffffff;border-radius: 8px;background-color: #ffcb13;padding: 14px 19px 14px 19px;" bgcolor="#ffcb13">
                                              <a class="pc-font-alt" style="display: inline-block;text-decoration: none;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-weight: 500;font-size: 16px;line-height: 150%;letter-spacing: -0.2px;color: #1c1c1c;font-variant-ligatures: normal;" href="https://hamsterpilot.com/user/dashboard" target="_blank">Visit Your Dashboard</a>
                                          </td>
                      </tr>
                  </table>
                  <![endif]-->
                                         <!--[if !mso]><!-- --><a style="border-radius: 8px;background-color: #ffcb13;padding: 14px 19px 14px 19px;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-weight: 500;font-size: 16px;line-height: 150%;letter-spacing: -0.2px;color: #1c1c1c;text-align: center;text-align-last: center;text-decoration: none;display: inline-block;vertical-align: top;-webkit-text-size-adjust: none;" href="https://hamsterpilot.com/user/dashboard" target="_blank">Visit Your Dashboard</a>
                                         <!--<![endif]-->
                                        </th>
                                       </tr>
                                      </table>
                                     </td>
                                    </tr>
                                   </table>
                                  </td>
                                 </tr>
                                </table>
                               </td>
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Button -->
                   </td>
                  </tr>
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Text -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-10-30-10-30 pc-w620-padding-10-35-10-35" style="padding: 10px 10px 10px 10px;border-radius: 0px;background-color: #ffffff;" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 140%;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-size: 18px;font-weight: normal;color: #333333;font-variant-ligatures: normal;">
                             <div><span>Don’t recognize this activity? Please reset your password and contact customer support immediately. <br/> <br/>Please check with the receiving platform or wallet as the transaction is already confirmed on the blockchain explorer.  <br/> <br/></span><span style="font-size: 16px;font-weight: 400;font-style: italic;">This is an automated message, please do not reply. </span>
                             </div>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Text -->
                   </td>
                  </tr>
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Separator -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-10-25-10-25 pc-w620-padding-10-30-10-30" style="padding: 10px 40px 10px 40px;border-radius: 0px;background-color: #ffffff;" bgcolor="#ffffff">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                           <tr>
                            <td valign="top">
                             <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                               <!--[if gte mso 9]>
                              <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #ffcb13;">&nbsp;</td>
                          <![endif]-->
                               <!--[if !gte mso 9]><!-- -->
                               <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 2px solid #ffcb13;">&nbsp;</td>
                               <!--<![endif]-->
                              </tr>
                             </table>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Separator -->
                   </td>
                  </tr>
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Text -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-10-30-10-30 pc-w620-padding-10-35-10-35" style="padding: 10px 10px 10px 10px;border-radius: 0px;background-color: #ffffff;" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                           <tr>
                            <td valign="top" class="pc-font-alt" style="mso-line-height: exactly;line-height: 140%;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-size: 10px;font-weight: normal;color: #333333;font-variant-ligatures: normal;">
                             <div><span style="font-weight: 700;font-style: normal;">Risk warning:</span><span> Cryptocurrency trading is subject to high market risk. HamsterPilot Token will make the best efforts to choose high-quality coins, but will not be responsible for your trading losses. Please trade with caution.<br/></span><span style="font-weight: 700;font-style: normal;">Kindly note:</span><span> Please be aware of phishing sites and always make sure you are visiting the official Binance.com website when entering sensitive data.</span>
                             </div>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Text -->
                   </td>
                  </tr>
                  <tr>
                   <td valign="top">
                    <!-- BEGIN MODULE: Text -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                     <tr>
                      <td style="padding: 0px 0px 0px 0px;">
                       <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                        <tr>
                         <td valign="top" class="pc-w520-padding-10-30-10-30 pc-w620-padding-10-35-10-35" style="padding: 10px 10px 10px 10px;border-radius: 0px;background-color: #ffffff;" bgcolor="#ffffff">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" align="center" style="margin-right: auto; margin-left: auto;">
                           <tr>
                            <td valign="top" class="pc-font-alt" align="center" style="mso-line-height: exactly;line-height: 140%;font-family: Fira Sans, Arial, Helvetica, sans-serif;font-size: 13px;font-weight: normal;color: #333333;text-align: center;text-align-last: center;font-variant-ligatures: normal;">
                             <div><span>© 2023 Hamsterpilot.com, All Rights Reserved</span>
                             </div>
                            </td>
                           </tr>
                          </table>
                         </td>
                        </tr>
                       </table>
                      </td>
                     </tr>
                    </table>
                    <!-- END MODULE: Text -->
                   </td>
                  </tr>
                  
                 </table>
                </td>
               </tr>
              </table>
             </td>
            </tr>
           </table>
           <!-- Fix for Gmail on iOS -->
           <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
           </div>
          </body>
          
          </html>
          
          `;
  };
  