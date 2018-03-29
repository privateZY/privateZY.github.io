<style lang="scss" scoped>
.bannerBox {
    height: 832px;
    background: url('../../assets/images/home/bannerBg.png');
    background-size: cover;
    background-position-x: 50%;
    .bannerImg {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        .title {
            position: absolute;
            top: 50%;
            left: 25%;
        }
        >img {
            margin-top: 78px;
            box-shadow: 0 49px 18px rgba(18, 22, 19, 0.7);
        }
    }
}

.middleContent {
    height: 117px;
    background: url('../../assets/images/home/bgb.png');
    background-size: cover;
    // background-position-y: 100%;
    background-position-x: 50%;
}
.mainContent {
    background: url('../../assets/images/home/bgs.png');
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
        <div class="middleContent"></div>
        <div class="mainContent"></div>
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