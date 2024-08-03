This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.










*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: rgb(8, 247, 255);
    margin: 10px;
    
}
.family {   
        
    margin: 10px;
}

.divpeople{
    background-color:lavender;
    margin: 10px;
}

.container {
    background-color: rgb(255, 34, 207);
    border: 1px solid black;    
    
}

/* img {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; 
    margin-left: 200px;   
} */

.articlecontainer {
    margin: 0 auto;
    margin-top: 4 rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;    
    overflow: hidden;
}

/* article {     
    position: absolute;   
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: var(--transition);
    

} */

.iconbtn1 {    
    color: rgba(35, 130, 246, 0.85);
    height: 30px;
    width: 40px;
    float: left;
    background-color: rgb(53, 49, 49);
    font-size: large;
    border-radius: 30%;
}
.iconbtn2 {
    
    color: rgba(35, 130, 246, 0.85);
    height: 30px;
    width: 40px;
    float: right;
    border-radius: 30%;
    font-size: large;
    background-color: rgb(32, 31, 31);

}

/* h1, h2, h4, h5 {
    text-align: center;
}  */

/* article.activeSlide {
    opacity: 1;
    transform: translateX(0);
}

article.lastSlide {
    transform: translateX(-100%);
}
article.nextSlide {
    transform: translateX(100%);
} */

input{
    border: 1px solid rgba(10, 193, 239, 0.959);
}

.error{
    border: 2px solid red;
}
.color{
    color: rgba(55, 65, 65, 0.045);
}
.color_light{
    color: aliceblue;
}

.gros_container {
    background-color: azure;
    padding: 20px;
}

form{
    display: flex;
    align-items: center;
    justify-content: center;
}
.items{
    display: flex;
    flex-direction: row;
    margin: 0px;
}
.btnicons{
    margin-left: 50px;
    color: brown; 
    
}
.danger {
    background-color: rgb(213, 147, 147);
    color: red;
}
.success{
    background-color: rgb(183, 247, 183);
    color: rgb(3, 136, 3);
}
.navcontainer {
    display: flex;
    list-style: none;
    gap: 10px;
    flex-direction: column;
}
.sidebar{
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 20px;
}

.divicons {
    display: flex;
    align-items: center;
}
.iconsocials{
    list-style: none;
    display: flex;
    gap: 10px;
    justify-items: end;
    
}

.divLinks{
    background-color: blueviolet;
    height: 10 rem;
}
.mainhome{
    transition: var(--transition);
}

.btnmodal {    
    display: flex;
    justify-content: center;    
}
.btnM{
    background-color: black;
    color: aliceblue;
    
}
.sidebar{
   opacity: 0;
   transform: translateX(-50%);
}
.showsidebar{
    
    display: flex;
    flex-direction: column;
    background-color: azure; 
    height: 100vh;       
    opacity: 1;
    
    flex-wrap: wrap;
    
}
li {
    list-style: none;
    display: flex;
    gap: 15px;
    padding: 20px;
    border-style: none;
}

.socialicons{
    display: flex;
    justify-content: flex-end;
}
.fatimes{
    display: flex;
    margin-left: auto;
    color: red;
    background-color: azure;
    border: none;   
    padding: 20px;
    cursor: pointer;
}
.divmodal{
    opacity: 1;
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    text-align: center;
}
.divmodalclose{
    opacity: 0;   
}

.startnow{
    margin-left: auto;
}

.nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    opacity: 0.98;
    visibility: hidden;
  }
  .nav.open {
    visibility: visible;
  }
  .nav .menu-nav {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background-color: #272727;
    list-style-type: none;
    padding-right: 1rem;
    transform: translateY(-100px);
    transition: all 0.5s ease-in-out;
  }
  .nav .menu-nav.open {
    transform: translateY(0);
  }
  .nav .menu-nav_item {
    transform: translateX(100vh);
    transition: all 0.5s ease-in-out;
  }
  .nav .menu-nav_item.open {
    transform: translateX(0);
  }

/*EXTRA CSS*/

.menu-btn {
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1rem;
  height: 20px;
  width: 28px;
  cursor: pointer;
  
  transition: all 0.5s ease-in-out;
}
.menu-btn.open {
  transform: rotate(720deg);
  transition: all 0.5s ease-in-out;
}


.menu-btn_burger.open {
  
  background: transparent;
}
.page{
    display: flex;
    flex-direction: column;
}

.logo{    
    height: 30px;
    width: 30px;  
}

.divnav{ 
           
    background-color: #272727;
    color: aliceblue;
    border-radius: 5%;
    padding: 10px;
           
    
}
.divlogo{
    display: flex;
    align-items: center;
    justify-content: center;
    
    
}
.amount_container{
    font-weight: 900;
    background-color: rgb(163, 202, 242);
    padding: 10px;    
    border-radius: 100%;    
    opacity: 0.75;
    color: rgb(22, 155, 44);
    
}

.headh2{
    padding: 60px;
    text-align: center;
}
.imgcart{
    width: 50px;
    height: 50px;
    border-bottom: 3px solid slategray;
    border-right: 3px solid slategray;
    
}

.cartitems{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    margin: 3px;
    gap: 5px;

    
}
.h4price {
color: red;

}
.btn_amount{
    color: red;
    font-size: 20px;
}

.divcart{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    
}
.h4s {
    text-align: center;
}
.divmaincart {
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin: 20px;
    gap: 60px;
}
/* .totaldiv{
    
    
} */
.total{ 
    display: flex;
    justify-content: center;   
    color: green;   
}
.loading{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40vh;
    
}
.clearmsg{
    text-align: center;
    color: rgb(251, 14, 14);
}

.CockTailNav{
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;   
}

.cockTaillogo{
    height: 50px;
    width: 50px;
    margin: 10px;
    

}
.CockTailNavlinks{
    display: flex;
    align-items: center;
    
    margin: 10px;
}
.AboutUs{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.AboutUsh1{
    text-align: center;
    padding: 50px;
}

.AboutUsdiv{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 50px;
}

.searchdiv{
    background-color: azure;
    height: 100px;
    width: 500px;
    display: flex;
    justify-content: center;
    
    margin: 20px;
    padding: 30px;
    
}
.cocktailinput{
    height: 30px;
    width:200px;
    text-indent: 20px;

}
.form {
    display: flex;
    justify-content: center;
    
}
label{
    text-align: center;
}
h1{
    text-align: center;
    padding: 50px;
}

img{
    height: 200px;
    width: 150px;
}
.magaritagrid{
    display: grid;
    grid-template-columns: repeat(1, 4fr);
}

.magaritas{
    background-color: aliceblue;
    width: 150px;

}
.CockTail {
    display: grid;
    grid-template-columns: repeat(1, 4fr);

}
