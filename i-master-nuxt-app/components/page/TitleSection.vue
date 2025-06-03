<template>
    <!-- ============================ Page Title Start================================== -->
    <section class="bg-cover primary-bg-dark" 
        :style="{ background: `url(${bgImage}) no-repeat`}">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12">

                    <h2 class="ipt-title text-light">{{ title }}</h2>
                    <span class="ipn-subtitle text-light opacity-75">{{ subTitle }}</span>

                </div>
            </div>
        </div>
    </section>
    <!-- ============================ Page Title End ================================== -->
</template>
<script setup>
    import bgImage from '@/assets/img/bg2.png';
    defineProps({
        title: String,
        subTitle: String | null
    })
</script>