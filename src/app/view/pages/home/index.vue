<style lang="scss" scoped>
.bannerBox {
    height: 754px;
    background: url('../../assets/images/home/bannerBg.png');
    background-size: cover;
    .bannerImg {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        .title {
            position: absolute;
            top: 50%;
            left: 50%;
        }
    }
}
</style>

<template>
    <div>
        <div class="bannerBox">
            <div class="bannerImg">
                <img src="../../assets/images/home/bannerImg.png"/>
                <div class="title">
                    <img src="../../assets/images/home/bannerTitle.png"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    
    export default {
    
        data (){
            return {}
        },
        methods:{
            
        },
        created (){
            console.log('created')

        }
    }
</script>