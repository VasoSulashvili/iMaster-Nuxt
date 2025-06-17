<template>
    <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="form-group">
            <label>{{ title }}</label>
            <select class="form-control my-select "
                :value="modelValue" 
                :type="type"
                @input="$emit('update:modelValue', $event.target.value)" >

                <slot></slot>
            </select>
            
        </div>
    </div>
</template>
<script setup>
    defineProps({
        title: {
            type: String,
            required: true,
            default: 'Input Text'
        },
        type: {
            type: String,
            required: true,
            default: 'text'
        },
        modelValue: {
            type: String,
            default: ''
        },
    })
    const emit = defineEmits(['update:modelValue'])
</script>
<style scoped>
    .my-select {
        /* width: 100%;
        height: 55px; */
        /* padding: 0 25px; */
        /* border-radius: 5px;
        border: 1px solid #ececec;
        font-size: 16px; */
    }
</style>