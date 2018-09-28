const spacingMock = `
            .u-padding-top-none{
              padding-top: 0px !important;
            }
            .u-padding-top-tiny{
              padding-top: 6px !important;
            }
            .u-padding-top-small{
              padding-top: 12px !important;
            }
            .u-padding-top-normal{
              padding-top: 24px !important;
            }
            .u-padding-top-large{
              padding-top: 48px !important;
            }
            .u-padding-top-huge{
              padding-top: 96px !important;
            }
            .u-padding-right-none{
              padding-right: 0px !important;
            }
            .u-padding-right-tiny{
              padding-right: 6px !important;
            }
            .u-padding-right-small{
              padding-right: 12px !important;
            }
            .u-padding-right-normal{
              padding-right: 24px !important;
            }
            .u-padding-right-large{
              padding-right: 48px !important;
            }
            .u-padding-right-huge{
              padding-right: 96px !important;
            }
            .u-padding-bottom-none{
              padding-bottom: 0px !important;
            }
            .u-padding-bottom-tiny{
              padding-bottom: 6px !important;
            }
            .u-padding-bottom-small{
              padding-bottom: 12px !important;
            }
            .u-padding-bottom-normal{
              padding-bottom: 24px !important;
            }
            .u-padding-bottom-large{
              padding-bottom: 48px !important;
            }
            .u-padding-bottom-huge{
              padding-bottom: 96px !important;
            }
            .u-padding-left-none{
              padding-left: 0px !important;
            }
            .u-padding-left-tiny{
              padding-left: 6px !important;
            }
            .u-padding-left-small{
              padding-left: 12px !important;
            }
            .u-padding-left-normal{
              padding-left: 24px !important;
            }
            .u-padding-left-large{
              padding-left: 48px !important;
            }
            .u-padding-left-huge{
              padding-left: 96px !important;
            }
            .u-padding-horizontal-none{
              padding-left: 0px;
padding-right: 0px;

            }
            .u-padding-horizontal-tiny{
              padding-left: 6px;
padding-right: 6px;

            }
            .u-padding-horizontal-small{
              padding-left: 12px;
padding-right: 12px;

            }
            .u-padding-horizontal-normal{
              padding-left: 24px;
padding-right: 24px;

            }
            .u-padding-horizontal-large{
              padding-left: 48px;
padding-right: 48px;

            }
            .u-padding-horizontal-huge{
              padding-left: 96px;
padding-right: 96px;

            }
            .u-padding-vertical-none{
              padding-top: 0px;
padding-bottom: 0px;

            }
            .u-padding-vertical-tiny{
              padding-top: 6px;
padding-bottom: 6px;

            }
            .u-padding-vertical-small{
              padding-top: 12px;
padding-bottom: 12px;

            }
            .u-padding-vertical-normal{
              padding-top: 24px;
padding-bottom: 24px;

            }
            .u-padding-vertical-large{
              padding-top: 48px;
padding-bottom: 48px;

            }
            .u-padding-vertical-huge{
              padding-top: 96px;
padding-bottom: 96px;

            }
            .u-margin-top-none{
              margin-top: 0px !important;
            }
            .u-margin-top-tiny{
              margin-top: 6px !important;
            }
            .u-margin-top-small{
              margin-top: 12px !important;
            }
            .u-margin-top-normal{
              margin-top: 24px !important;
            }
            .u-margin-top-large{
              margin-top: 48px !important;
            }
            .u-margin-top-huge{
              margin-top: 96px !important;
            }
            .u-margin-right-none{
              margin-right: 0px !important;
            }
            .u-margin-right-tiny{
              margin-right: 6px !important;
            }
            .u-margin-right-small{
              margin-right: 12px !important;
            }
            .u-margin-right-normal{
              margin-right: 24px !important;
            }
            .u-margin-right-large{
              margin-right: 48px !important;
            }
            .u-margin-right-huge{
              margin-right: 96px !important;
            }
            .u-margin-bottom-none{
              margin-bottom: 0px !important;
            }
            .u-margin-bottom-tiny{
              margin-bottom: 6px !important;
            }
            .u-margin-bottom-small{
              margin-bottom: 12px !important;
            }
            .u-margin-bottom-normal{
              margin-bottom: 24px !important;
            }
            .u-margin-bottom-large{
              margin-bottom: 48px !important;
            }
            .u-margin-bottom-huge{
              margin-bottom: 96px !important;
            }
            .u-margin-left-none{
              margin-left: 0px !important;
            }
            .u-margin-left-tiny{
              margin-left: 6px !important;
            }
            .u-margin-left-small{
              margin-left: 12px !important;
            }
            .u-margin-left-normal{
              margin-left: 24px !important;
            }
            .u-margin-left-large{
              margin-left: 48px !important;
            }
            .u-margin-left-huge{
              margin-left: 96px !important;
            }
            .u-margin-horizontal-none{
              margin-left: 0px;
margin-right: 0px;

            }
            .u-margin-horizontal-tiny{
              margin-left: 6px;
margin-right: 6px;

            }
            .u-margin-horizontal-small{
              margin-left: 12px;
margin-right: 12px;

            }
            .u-margin-horizontal-normal{
              margin-left: 24px;
margin-right: 24px;

            }
            .u-margin-horizontal-large{
              margin-left: 48px;
margin-right: 48px;

            }
            .u-margin-horizontal-huge{
              margin-left: 96px;
margin-right: 96px;

            }
            .u-margin-vertical-none{
              margin-top: 0px;
margin-bottom: 0px;

            }
            .u-margin-vertical-tiny{
              margin-top: 6px;
margin-bottom: 6px;

            }
            .u-margin-vertical-small{
              margin-top: 12px;
margin-bottom: 12px;

            }
            .u-margin-vertical-normal{
              margin-top: 24px;
margin-bottom: 24px;

            }
            .u-margin-vertical-large{
              margin-top: 48px;
margin-bottom: 48px;

            }
            .u-margin-vertical-huge{
              margin-top: 96px;
margin-bottom: 96px;

            }`;


export default spacingMock;
