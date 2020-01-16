import React from "react";
export const onRenderBody = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `(function(i,s,o,g,r,a,m){i['SLScoutObject']=r;i[r]=i[r]||function(){
 (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
 m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
 })(window,document,'script','https://scout-cdn.salesloft.com/sl.js','slscout');
 slscout(["init", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0Ijo5MzI3fQ._yWESyK1NcerVYm4znug5rNzMBGdLuW6WkY08msspak"]);`
      }
    })
  ]);  
}  
