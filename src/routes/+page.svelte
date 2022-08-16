<script lang="ts">
  const code = `export let data: MyPageData = { foo: 'bar' };`;
</script>

<p>
  Repo demonstrating that the <code>data</code> property of <code>+page.svelte</code> does not respect
  setting a default value.
</p>

<p>
  All <code>+page.svelte</code> for the above cases set the <code>data</code> prop to the same default:
</p>
<pre>
  {code}
</pre>
<p>
  None of them are rendered with the default. The only case that "works" is C, where, in fact, the
  <code>load</code> function returns the data.
</p>
