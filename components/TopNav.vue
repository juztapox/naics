<template>
	<div class="border-b-4 border-brand-500">
		<div class="container m-auto flex items-center py-4">
			<img src="~/assets/ohio_logo.png" alt />
			<div class="ml-auto">
				<ul class="flex text-center text-lg font-bold text-brand-500">
					<li>
						<i class="fa fa-search"></i>
						<div>Search</div>
					</li>
					<li class="ml-24">
						<i class="fa fa-th-large"></i>
						<div>Menu</div>
					</li>
					<li class="ml-24">
						<i class="fa fa-user"></i>
						<div>My Account</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>


<style lang="postcss" scoped>
li > i.fa {
    font-size: 28px;
}

img {
    height: 61px;
}
</style>