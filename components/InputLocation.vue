<template>
	<div class="input-location">
		<i class="fa fa-map-marker text-gray-400"></i>
		<input
			type="search"
			ref="autocomplete"
			placeholder="Search for an address"
			class="text-input pl-10"
            v-model="localAddress"
		/>
	</div>
</template>

<script>
export default {
    props: ['address'],
    data() {
        return {
            localAddress: ''
        }
    },
	mounted() {
        let input = this.$refs.autocomplete
		this.autocomplete = new google.maps.places.Autocomplete(input, {
			types: ['address']
        })
        
        this.autocomplete.addListener('place_changed', ()=>{
            let place = this.autocomplete.getPlace();
            this.$emit('select', place);
        })
	}
}
</script>

<style lang="postcss" scoped>
.input-location {
	position: relative;
}
i.fa {
	position: absolute;
	font-size: 24px;
	top: 11px;
	left: 14px;
}

.input-location:focus ~ i.fa-search {
	color: $gray-800;
}
</style>