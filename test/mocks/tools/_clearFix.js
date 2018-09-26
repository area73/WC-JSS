const _clearFix = `
  .dummy:after {
     content: "" !important; 
     display: block !important; 
     clear: both !important; 
   }
`;

export default _clearFix;
