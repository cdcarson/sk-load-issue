<script lang="ts">
  import type { MyPageData } from 'src/lib/types';
  export let data: MyPageData = {
    foo: 'bar'
  };
</script>

<h2>
  Case A: Without <code>+page.server.ts</code>
</h2>

<h2>Data</h2>
<pre>{JSON.stringify(data)}</pre>
