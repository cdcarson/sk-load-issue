<script lang="ts">
  import type { MyPageData } from 'src/lib/types';
  export let data: MyPageData = {
    foo: 'bar'
  };
</script>

<h2>
  Case B: With <code>+page.server.ts</code> that lacks <code>load</code> function
</h2>

<h2>Data</h2>
<pre>{JSON.stringify(data)}</pre>
