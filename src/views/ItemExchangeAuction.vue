<template>
<main>

<section>
<div class="header">
<div class="image-container" @click="call()">
<img
src="./img/cross.png"
alt="VueCharged Logo"/></div>
<h3>    List item for sale</h3>
</div>
</section>
<section>
<div class ="main-container">
<form action="/upload" method="POST" enctype="multipart/form-data">
    <div style="display:flex;justify-content:flex-start">
    <input type="file" name="file" id="file" class="custom-file-input" style="display:none">
    <img src="./img/upload.png" alt="upload file" @click="fileUpload()" style="height:100px;width:100px;"/>
    </div>
</form>
<md-field>
<label>Title</label>
<md-input v-model="maxLength" maxlength="40"></md-input>
</md-field>
<div class="md-layout-item">
<md-field>
<md-select v-model="category" name="category" id="category" placeholder="Select a category">
<md-option value="Exchange">Exchange</md-option>
<md-option value="Auction">Auction</md-option>
</md-select>
</md-field>

<div v-if= "category === 'Auction'">
<md-field>
<label>Minimum Bid</label>
<md-input v-model="minBid" maxlength="10"></md-input>
</md-field></div>
</div>
<md-field>
<label>Description</label>
<md-input v-model="description"></md-input>
</md-field>
<md-button>Sell It</md-button>
</div>
</section>

</main>
</template>

<script>
export default {

data () {
return {
category: ""
}
},

methods : {
call : function(){
    alert();
},

fileUpload : function(){
    document.getElementById("file").click();
    
},



}



}
</script>



<style lang="scss" scoped>
.main-container{
padding:0 16px;
}
.header{
padding:16px 16px;
display: flex;

}
.header .image-container{
display:flex;
align-items:center;
}
.header img{
height:14px;
width:14px;
}
.header h3{
margin:0;
padding-left: 2rem;
font-size: 20px;
}
span.md-count{
color:red;
}
.md-button.md-theme-default{
width: 100%;
background-color:#72f5d2;
margin:0;
color:white;
}

</style>
