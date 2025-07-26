// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// //     <style>
// //         .main{
// //             display: grid;
// //             grid-template-columns: 500px 500px;
// //             grid-template-rows: 200px 200px;
// //             grid-template-areas: "head head"
// //                                 "side content"
// //                                 "footer footer";
// //         }
// //         .haed{
// //             grid-area: head;
// //         }
// //         .side{
// //             grid-area: side;
// //         }
// //         .content{
// //             grid-area: content;
// //         }
// //         .footer{
// //             grid-area: footer;
// //         }
// //     </style>
// // </head>
// // <body>
// //     <div class="main">
// //         <div class="haed">Header</div>
// //         <div class="side">side</div>
// //         <div class="content">Content</div>
// //         <div class="footer">Footer</div>
// //     </div>
// // </body>
// // </html>


// const a={
//     name:"suhail",
//     age:"12",
//     greet:function(method){
//         console.log("hello "+this.name+" from "+ method);
        
//     }
// }


// const b={
//     name:"ajmal",
//     age:20
// }

// a.greet();

// a.greet.call(b,"call");
// a.greet.apply(b,["apply"])
//  const c=a.greet.bind(b,"bind");
// c();

class Animal{
    constructor(name){
        this.name=name
    }
    speak(){
        console.log(`${this.name} barks`);
        
    }
}

const a=new Animal("dog");
console.log(a);
a.speak();
