<template>
    <section class="m-istyle">
        <dl @mousemove="over">
            <dt>有格调</dt>
                <dd>全部</dd>
                <dd>约会聚餐</dd>
                <dd>丽人SPA</dd>
                <dd>电影演出</dd>
                <dd>品质出游</dd>
        </dl>
        <ul class="ibody">
            <li>
                <el-card>
                    <img src="" alt="">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </el-card>
            </li>
            <li>
                <el-card>
                    <img src="" alt="">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </el-card>
            </li>
             <li>
                <el-card>
                    <img src="" alt="">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </el-card>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        over() {
            
        }
    }

}
</script>

<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>