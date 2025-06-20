<template>
    <div :class="wrapperStyle">
        <div class="form-group">
            <label>{{ title }}</label>
            <input class="form-control"
                :value="modelValue" 
                :type="type"
                :placeholder="placeholder"
                @input="$emit('update:modelValue', $event.target.value)" />
        </div>
    </div>
</template>
<script setup>
import { stringifyQuery } from 'vue-router';

    defineProps({
        title: {
            type: String,
            required: false,
            default: ''
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
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
        wrapperStyle: {
            type: String,
            default: 'col-xl-6 col-lg-6 col-md-12'
        }
    })
    const emit = defineEmits(['update:modelValue'])
</script>