const specificWidthsMocks = `
.u-1/2 {width: 50% !important;}
.u-pull-1/2  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
.u-push-1/2 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
.u-1/4 {width: 25% !important;}
.u-pull-1/4  {
      position: relative !important;
      right: 25% !important;
      left: auto !important; /!* [1] *!/
   }
.u-push-1/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 25% !important;
    }
.u-2/3 {width: 66.6667% !important;}
.u-pull-2/3  {
      position: relative !important;
      right: 66.6667% !important;
      left: auto !important; /!* [1] *!/
   }
.u-push-2/3 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 66.6667% !important;
    }
`;


const widthsGroupsMock = `

      .u-1/1 {width: 100% !important;}
      .u-pull-1/1  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/1 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/4 {width: 25% !important;}
      .u-pull-1/4  {
      position: relative !important;
      right: 25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 25% !important;
    }
    
      .u-2/4 {width: 50% !important;}
      .u-pull-2/4  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
    
      .u-3/4 {width: 75% !important;}
      .u-pull-3/4  {
      position: relative !important;
      right: 75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 75% !important;
    }
    
      .u-4/4 {width: 100% !important;}
      .u-pull-4/4  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/16 {width: 6.25% !important;}
      .u-pull-1/16  {
      position: relative !important;
      right: 6.25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 6.25% !important;
    }
    
      .u-2/16 {width: 12.5% !important;}
      .u-pull-2/16  {
      position: relative !important;
      right: 12.5% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 12.5% !important;
    }
    
      .u-3/16 {width: 18.75% !important;}
      .u-pull-3/16  {
      position: relative !important;
      right: 18.75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 18.75% !important;
    }
    
      .u-4/16 {width: 25% !important;}
      .u-pull-4/16  {
      position: relative !important;
      right: 25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 25% !important;
    }
    
      .u-5/16 {width: 31.25% !important;}
      .u-pull-5/16  {
      position: relative !important;
      right: 31.25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 31.25% !important;
    }
    
      .u-6/16 {width: 37.5% !important;}
      .u-pull-6/16  {
      position: relative !important;
      right: 37.5% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-6/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 37.5% !important;
    }
    
      .u-7/16 {width: 43.75% !important;}
      .u-pull-7/16  {
      position: relative !important;
      right: 43.75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-7/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 43.75% !important;
    }
    
      .u-8/16 {width: 50% !important;}
      .u-pull-8/16  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-8/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
    
      .u-9/16 {width: 56.25% !important;}
      .u-pull-9/16  {
      position: relative !important;
      right: 56.25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-9/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 56.25% !important;
    }
    
      .u-10/16 {width: 62.5% !important;}
      .u-pull-10/16  {
      position: relative !important;
      right: 62.5% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-10/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 62.5% !important;
    }
    
      .u-11/16 {width: 68.75% !important;}
      .u-pull-11/16  {
      position: relative !important;
      right: 68.75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-11/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 68.75% !important;
    }
    
      .u-12/16 {width: 75% !important;}
      .u-pull-12/16  {
      position: relative !important;
      right: 75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-12/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 75% !important;
    }
    
      .u-13/16 {width: 81.25% !important;}
      .u-pull-13/16  {
      position: relative !important;
      right: 81.25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-13/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 81.25% !important;
    }
    
      .u-14/16 {width: 87.5% !important;}
      .u-pull-14/16  {
      position: relative !important;
      right: 87.5% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-14/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 87.5% !important;
    }
    
      .u-15/16 {width: 93.75% !important;}
      .u-pull-15/16  {
      position: relative !important;
      right: 93.75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-15/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 93.75% !important;
    }
    
      .u-16/16 {width: 100% !important;}
      .u-pull-16/16  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-16/16 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    `;

const widthsAllMock = `

      .u-1/1 {width: 100% !important;}
      .u-pull-1/1  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/1 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/2 {width: 50% !important;}
      .u-pull-1/2  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/2 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
    
      .u-2/2 {width: 100% !important;}
      .u-pull-2/2  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/2 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/3 {width: 33.3333% !important;}
      .u-pull-1/3  {
      position: relative !important;
      right: 33.3333% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/3 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 33.3333% !important;
    }
    
      .u-2/3 {width: 66.6667% !important;}
      .u-pull-2/3  {
      position: relative !important;
      right: 66.6667% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/3 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 66.6667% !important;
    }
    
      .u-3/3 {width: 100% !important;}
      .u-pull-3/3  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/3 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/4 {width: 25% !important;}
      .u-pull-1/4  {
      position: relative !important;
      right: 25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 25% !important;
    }
    
      .u-2/4 {width: 50% !important;}
      .u-pull-2/4  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
    
      .u-3/4 {width: 75% !important;}
      .u-pull-3/4  {
      position: relative !important;
      right: 75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 75% !important;
    }
    
      .u-4/4 {width: 100% !important;}
      .u-pull-4/4  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/4 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/5 {width: 20% !important;}
      .u-pull-1/5  {
      position: relative !important;
      right: 20% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/5 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 20% !important;
    }
    
      .u-2/5 {width: 40% !important;}
      .u-pull-2/5  {
      position: relative !important;
      right: 40% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/5 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 40% !important;
    }
    
      .u-3/5 {width: 60% !important;}
      .u-pull-3/5  {
      position: relative !important;
      right: 60% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/5 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 60% !important;
    }
    
      .u-4/5 {width: 80% !important;}
      .u-pull-4/5  {
      position: relative !important;
      right: 80% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/5 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 80% !important;
    }
    
      .u-5/5 {width: 100% !important;}
      .u-pull-5/5  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/5 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/6 {width: 16.6667% !important;}
      .u-pull-1/6  {
      position: relative !important;
      right: 16.6667% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/6 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 16.6667% !important;
    }
    
      .u-2/6 {width: 33.3333% !important;}
      .u-pull-2/6  {
      position: relative !important;
      right: 33.3333% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/6 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 33.3333% !important;
    }
    
      .u-3/6 {width: 50% !important;}
      .u-pull-3/6  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/6 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
    
      .u-4/6 {width: 66.6667% !important;}
      .u-pull-4/6  {
      position: relative !important;
      right: 66.6667% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/6 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 66.6667% !important;
    }
    
      .u-5/6 {width: 83.3333% !important;}
      .u-pull-5/6  {
      position: relative !important;
      right: 83.3333% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/6 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 83.3333% !important;
    }
    
      .u-6/6 {width: 100% !important;}
      .u-pull-6/6  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-6/6 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/7 {width: 14.2857% !important;}
      .u-pull-1/7  {
      position: relative !important;
      right: 14.2857% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/7 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 14.2857% !important;
    }
    
      .u-2/7 {width: 28.5714% !important;}
      .u-pull-2/7  {
      position: relative !important;
      right: 28.5714% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/7 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 28.5714% !important;
    }
    
      .u-3/7 {width: 42.8571% !important;}
      .u-pull-3/7  {
      position: relative !important;
      right: 42.8571% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/7 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 42.8571% !important;
    }
    
      .u-4/7 {width: 57.1429% !important;}
      .u-pull-4/7  {
      position: relative !important;
      right: 57.1429% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/7 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 57.1429% !important;
    }
    
      .u-5/7 {width: 71.4286% !important;}
      .u-pull-5/7  {
      position: relative !important;
      right: 71.4286% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/7 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 71.4286% !important;
    }
    
      .u-6/7 {width: 85.7143% !important;}
      .u-pull-6/7  {
      position: relative !important;
      right: 85.7143% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-6/7 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 85.7143% !important;
    }
    
      .u-7/7 {width: 100% !important;}
      .u-pull-7/7  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-7/7 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/8 {width: 12.5% !important;}
      .u-pull-1/8  {
      position: relative !important;
      right: 12.5% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/8 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 12.5% !important;
    }
    
      .u-2/8 {width: 25% !important;}
      .u-pull-2/8  {
      position: relative !important;
      right: 25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/8 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 25% !important;
    }
    
      .u-3/8 {width: 37.5% !important;}
      .u-pull-3/8  {
      position: relative !important;
      right: 37.5% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/8 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 37.5% !important;
    }
    
      .u-4/8 {width: 50% !important;}
      .u-pull-4/8  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/8 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
    
      .u-5/8 {width: 62.5% !important;}
      .u-pull-5/8  {
      position: relative !important;
      right: 62.5% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/8 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 62.5% !important;
    }
    
      .u-6/8 {width: 75% !important;}
      .u-pull-6/8  {
      position: relative !important;
      right: 75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-6/8 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 75% !important;
    }
    
      .u-7/8 {width: 87.5% !important;}
      .u-pull-7/8  {
      position: relative !important;
      right: 87.5% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-7/8 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 87.5% !important;
    }
    
      .u-8/8 {width: 100% !important;}
      .u-pull-8/8  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-8/8 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/9 {width: 11.1111% !important;}
      .u-pull-1/9  {
      position: relative !important;
      right: 11.1111% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 11.1111% !important;
    }
    
      .u-2/9 {width: 22.2222% !important;}
      .u-pull-2/9  {
      position: relative !important;
      right: 22.2222% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 22.2222% !important;
    }
    
      .u-3/9 {width: 33.3333% !important;}
      .u-pull-3/9  {
      position: relative !important;
      right: 33.3333% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 33.3333% !important;
    }
    
      .u-4/9 {width: 44.4444% !important;}
      .u-pull-4/9  {
      position: relative !important;
      right: 44.4444% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 44.4444% !important;
    }
    
      .u-5/9 {width: 55.5556% !important;}
      .u-pull-5/9  {
      position: relative !important;
      right: 55.5556% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 55.5556% !important;
    }
    
      .u-6/9 {width: 66.6667% !important;}
      .u-pull-6/9  {
      position: relative !important;
      right: 66.6667% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-6/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 66.6667% !important;
    }
    
      .u-7/9 {width: 77.7778% !important;}
      .u-pull-7/9  {
      position: relative !important;
      right: 77.7778% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-7/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 77.7778% !important;
    }
    
      .u-8/9 {width: 88.8889% !important;}
      .u-pull-8/9  {
      position: relative !important;
      right: 88.8889% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-8/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 88.8889% !important;
    }
    
      .u-9/9 {width: 100% !important;}
      .u-pull-9/9  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-9/9 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/10 {width: 10% !important;}
      .u-pull-1/10  {
      position: relative !important;
      right: 10% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 10% !important;
    }
    
      .u-2/10 {width: 20% !important;}
      .u-pull-2/10  {
      position: relative !important;
      right: 20% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 20% !important;
    }
    
      .u-3/10 {width: 30% !important;}
      .u-pull-3/10  {
      position: relative !important;
      right: 30% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 30% !important;
    }
    
      .u-4/10 {width: 40% !important;}
      .u-pull-4/10  {
      position: relative !important;
      right: 40% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 40% !important;
    }
    
      .u-5/10 {width: 50% !important;}
      .u-pull-5/10  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
    
      .u-6/10 {width: 60% !important;}
      .u-pull-6/10  {
      position: relative !important;
      right: 60% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-6/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 60% !important;
    }
    
      .u-7/10 {width: 70% !important;}
      .u-pull-7/10  {
      position: relative !important;
      right: 70% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-7/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 70% !important;
    }
    
      .u-8/10 {width: 80% !important;}
      .u-pull-8/10  {
      position: relative !important;
      right: 80% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-8/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 80% !important;
    }
    
      .u-9/10 {width: 90% !important;}
      .u-pull-9/10  {
      position: relative !important;
      right: 90% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-9/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 90% !important;
    }
    
      .u-10/10 {width: 100% !important;}
      .u-pull-10/10  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-10/10 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/11 {width: 9.0909% !important;}
      .u-pull-1/11  {
      position: relative !important;
      right: 9.0909% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 9.0909% !important;
    }
    
      .u-2/11 {width: 18.1818% !important;}
      .u-pull-2/11  {
      position: relative !important;
      right: 18.1818% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 18.1818% !important;
    }
    
      .u-3/11 {width: 27.2727% !important;}
      .u-pull-3/11  {
      position: relative !important;
      right: 27.2727% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 27.2727% !important;
    }
    
      .u-4/11 {width: 36.3636% !important;}
      .u-pull-4/11  {
      position: relative !important;
      right: 36.3636% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 36.3636% !important;
    }
    
      .u-5/11 {width: 45.4545% !important;}
      .u-pull-5/11  {
      position: relative !important;
      right: 45.4545% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 45.4545% !important;
    }
    
      .u-6/11 {width: 54.5455% !important;}
      .u-pull-6/11  {
      position: relative !important;
      right: 54.5455% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-6/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 54.5455% !important;
    }
    
      .u-7/11 {width: 63.6364% !important;}
      .u-pull-7/11  {
      position: relative !important;
      right: 63.6364% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-7/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 63.6364% !important;
    }
    
      .u-8/11 {width: 72.7273% !important;}
      .u-pull-8/11  {
      position: relative !important;
      right: 72.7273% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-8/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 72.7273% !important;
    }
    
      .u-9/11 {width: 81.8182% !important;}
      .u-pull-9/11  {
      position: relative !important;
      right: 81.8182% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-9/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 81.8182% !important;
    }
    
      .u-10/11 {width: 90.9091% !important;}
      .u-pull-10/11  {
      position: relative !important;
      right: 90.9091% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-10/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 90.9091% !important;
    }
    
      .u-11/11 {width: 100% !important;}
      .u-pull-11/11  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-11/11 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    

      .u-1/12 {width: 8.3333% !important;}
      .u-pull-1/12  {
      position: relative !important;
      right: 8.3333% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-1/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 8.3333% !important;
    }
    
      .u-2/12 {width: 16.6667% !important;}
      .u-pull-2/12  {
      position: relative !important;
      right: 16.6667% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-2/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 16.6667% !important;
    }
    
      .u-3/12 {width: 25% !important;}
      .u-pull-3/12  {
      position: relative !important;
      right: 25% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-3/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 25% !important;
    }
    
      .u-4/12 {width: 33.3333% !important;}
      .u-pull-4/12  {
      position: relative !important;
      right: 33.3333% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-4/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 33.3333% !important;
    }
    
      .u-5/12 {width: 41.6667% !important;}
      .u-pull-5/12  {
      position: relative !important;
      right: 41.6667% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-5/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 41.6667% !important;
    }
    
      .u-6/12 {width: 50% !important;}
      .u-pull-6/12  {
      position: relative !important;
      right: 50% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-6/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 50% !important;
    }
    
      .u-7/12 {width: 58.3333% !important;}
      .u-pull-7/12  {
      position: relative !important;
      right: 58.3333% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-7/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 58.3333% !important;
    }
    
      .u-8/12 {width: 66.6667% !important;}
      .u-pull-8/12  {
      position: relative !important;
      right: 66.6667% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-8/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 66.6667% !important;
    }
    
      .u-9/12 {width: 75% !important;}
      .u-pull-9/12  {
      position: relative !important;
      right: 75% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-9/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 75% !important;
    }
    
      .u-10/12 {width: 83.3333% !important;}
      .u-pull-10/12  {
      position: relative !important;
      right: 83.3333% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-10/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 83.3333% !important;
    }
    
      .u-11/12 {width: 91.6667% !important;}
      .u-pull-11/12  {
      position: relative !important;
      right: 91.6667% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-11/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 91.6667% !important;
    }
    
      .u-12/12 {width: 100% !important;}
      .u-pull-12/12  {
      position: relative !important;
      right: 100% !important;
      left: auto !important; /!* [1] *!/
   }
      .u-push-12/12 {
      position: relative !important;
      right: auto !important; /!* [1] *!/
      left: 100% !important;
    }
    `;

export { specificWidthsMocks, widthsGroupsMock, widthsAllMock };
