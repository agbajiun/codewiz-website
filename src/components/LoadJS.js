export const appendScript = (scriptToAppend)=>{

    const script = document.createElement('script');
    script.type="text/babel";
    script.src=scriptToAppend;
    script.async = true;
    document.body.appendChild(script);
}