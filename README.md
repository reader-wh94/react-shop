## 1. How to use

To use this application, 

1. make dev.js file inside config folder 
2. put mongoDB info into dev.js file 
3. Type  " npm install " inside the root directory  ( Download Server Dependencies ) 
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )

<br />

<br />

<br />

## 2. Screen shot

### 1. Main page

url : http://localhost:3000/

This is main page. And you can see Sign In, Sign Up button.

![main](https://user-images.githubusercontent.com/68210266/209672997-000ba397-f34e-42ce-aa4c-eed7df4ded90.PNG)

<br />

You can filter by continent and price. (However, this item is not a travel product.)

![box](https://user-images.githubusercontent.com/68210266/209674876-0762116f-1d7f-41fa-b2aa-3676a1695c32.PNG)

<br />

<br />

### 2. Sign Up Page

url: http://localhost:3000/register

This is sign up page. You can sign up by filling in all the blanks.

![signup](https://user-images.githubusercontent.com/68210266/209673062-b1fd6410-4581-4b6c-9ff8-f7b87bf2272d.PNG)

<br />

<br />

### 3. Sign In Page

url: http://localhost:3000/login

After signing up, just log in.

![login](https://user-images.githubusercontent.com/68210266/209673167-68a07eef-8dfc-4d3f-9658-36a7dff0fbfb.PNG)

<br />

<br />

### 4. After Login header

Header changes when you logged in.

![header](https://user-images.githubusercontent.com/68210266/209673318-1f0ef1a2-2029-4a2f-ad70-47a6a99f54a1.PNG)

<br />

<br />

### 5. Upload Page

url: http://localhost:3000/upload

You can upload items with pictures, name, description, price.

And you must select continent. (Example is not a country, sorry)

![upload](https://user-images.githubusercontent.com/68210266/209673507-1bc4aa1c-9d04-4e5b-89ce-d81117d766c5.PNG)

<br />

<br />

### 5-1. Upload Complete

If the upload is successful, you will see this popup.

![ok](https://user-images.githubusercontent.com/68210266/209673564-29c9604a-5df3-4b4b-a7f6-6cafdc03c518.PNG)

<br />

On the main page, you can see that the products you uploaded are new.

![upload_ok](https://user-images.githubusercontent.com/68210266/209673575-0556ece0-ecc7-433b-b39a-4d399915a4a2.PNG)

<br />

<br />

### 6. Detail Page

url: http://localhost:3000/product/{productId}

This is the product detail page.

![detail](https://user-images.githubusercontent.com/68210266/209674189-229b2831-f3e2-4671-885b-fc8057397d83.PNG)

<br />

<br />

### 6-1. Click Add to Cart Button

When you click the Add to Cart button on the product detail page, the header number changes.

 ![cart1](https://user-images.githubusercontent.com/68210266/209674325-c8ee00e8-e6d3-4bd5-ba03-0ba5e6bbde9a.PNG)

<br />

<br />

### 7. Cart page

url: http://localhost:3000/cart

Click the cart in the header to go to the cart page.
Here you can see what you put in your cart, total price, etc.
You can also delete it by clicking the remove button.

Oh, you can also pay with the paypal button. I'll show you from behind

![cart](https://user-images.githubusercontent.com/68210266/209674369-84a383e5-e8f7-4dfe-ac04-f5498767fd06.PNG)

<br />

<br />

### 7-1. Empty Cart

This screen appears when there are no products in the cart.

![empty](https://user-images.githubusercontent.com/68210266/209674539-c7c8cc1c-5361-4363-89cd-0844fe43aa10.PNG)

<br />

<br />

### 7-2. Cart Page after payment

This is the page that appears after paying for a cart product.

![emptycart](https://user-images.githubusercontent.com/68210266/209674450-ae7dff12-9c55-4b14-baf6-f037c94ca4da.PNG)

<br />

<br />

### 8. Payment

It's a pop-up window that opens when you click the PayPal button.



![payment](https://user-images.githubusercontent.com/68210266/209674708-06f76e99-4bf4-4e1f-9b82-9aa43323dcd4.PNG)

<br />

![payment1](https://user-images.githubusercontent.com/68210266/209676860-893e2bc2-d833-4306-9dda-eb8615d56d64.PNG)

<br />

<br />

### 9. History Page

url: http://localhost:3000/history

This is the page where you can check your payment details.

Right now it's empty because I don't have any payment history.



![his](https://user-images.githubusercontent.com/68210266/209674814-66647552-272f-418b-8296-f4e52caf3c5b.PNG)

<br />

After payment, it will show.

![hist](https://user-images.githubusercontent.com/68210266/209674824-3fc7d1ea-26ba-4fa1-85f5-5bfbe95ac86b.PNG)