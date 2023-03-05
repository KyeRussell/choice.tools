<script lang="ts">
	import autoAnimate from '@formkit/auto-animate';
</script>

<div class="flex flex-col rounded-lg border-4 border-neutral-700">
	<ul
		class="divide-y-4 divide-neutral-700 border-b-4 border-b-neutral-700"
		use:autoAnimate={{ duration: 100 }}
	>
		<slot />
	</ul>
</div>
