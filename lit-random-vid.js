import { LitElement, html, css} from 'lit-element';

class LitRandomVid extends LitElement {
  
  static get properties() { return {
    code: {type: String},
    width: {type: Number},
    height: {type: Number}
  }}  

  constructor() {
    super();
    
    this.width = 320;
    this.height = 180;

    let range = (start,stop) =>{
      let result=[];
      for (let idx=start.charCodeAt(0),end=stop.charCodeAt(0); idx <=end; ++idx){
        result.push(String.fromCharCode(idx));
      }return result;}

    const range1= range('a','z');
    console.log(range1)
    const range2= range('A','Z');
    console.log(range2)
    const range3= range('0','9');
    console.log(range3)
    const rangeEnd = range1.concat(range2.concat(range3.concat(['_','-'])))
    console.log(rangeEnd)
    let randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    this.code = randomElement(rangeEnd)
    for (let step = 0; step < 10; step++) {
      this.code += randomElement(rangeEnd)
    }
  }

  static get styles() {
    return [ css``];
  }

  render(){
    return html`
    <iframe 
      width="${this.width}"
      height="${this.height}"
      src="https://www.youtube.com/embed/${this.code}">
    </iframe>
    `;
  }
  
  
  
  randomYoutubeCode(){
    //console.log(new RandExp(/hello+ (world|to you)/).gen())
  }
}
// Register the new element with the browser.
customElements.define('lit-random-vid', LitRandomVid);