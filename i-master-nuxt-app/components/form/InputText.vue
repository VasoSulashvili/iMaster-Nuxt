<template>
    <div class="col-xl-6 col-lg-6 col-md-12">
        <div class="form-group">
            <label>{{ title }}</label>
            <input class="form-control"
                :value="modelValue" 
                :type="type"
                @input="$emit('update:modelValue', $event.target.value)" />
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