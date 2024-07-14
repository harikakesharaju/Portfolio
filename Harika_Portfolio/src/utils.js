// takes relative url and returns absolute url
export const getimgurl=(path)=>{
    return new URL(`/assets/${path}`,import.meta.url).href;
}
