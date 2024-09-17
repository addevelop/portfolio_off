export default class OutilPosition
{
    static scrolled100vh(element: any): boolean
    {
        console.log(element.scrollY);
        return element.scrollTop >= element.clientHeight;
    } 
    static getScrollY(): number
    {
        return window.scrollY;
    }

    static windowScrolledPage(n: number)
    {
        return window.scrollY >= window.innerHeight * n;
    }
}