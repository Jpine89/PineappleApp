<script setup lang="ts">
    var overlay: false;
</script>

<template>
    <body>
        <scetion class="item">
            <div class="test">
                <div>Fixed Top Navigation Bar</div>
                
                <ul  class="listDesign" id="myList" style="padding:0;">
                </ul>            
            </div>
        </scetion>
    </body>


    <footer class="footer">
        <div class="row">
            <div class="col bi bi-arrow-left"> Left</div>
            <div class="col bi bi-arrow-right-circle" style="text-align: right;"> Right</div>
        </div>   
    </footer>

</template>



<script lang="ts">

    function test(){
        console.log("HelloWorld");
    }

</script>

<style scoped>
    body{
        background-color: #1abc9c;
    }
    /* .item {
    margin-top: 2rem;
    display: flex;
    } */

    .test{
        padding:20px;
        margin-top:45px;
        background-color:#1abc9c;
        height: 100%;
    }

    .footer{
        z-index: 1;
        position: fixed;
        bottom: 0;
        left: 0px;
        right: 0px;
        margin-bottom: 0px;
        background: linear-gradient(to left, #f46b45, #eea849);
        width: 100%;
    }
</style>