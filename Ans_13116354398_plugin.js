<div id="zenback-widget-loader"></div>
<script type='text/javascript' src='http://stat100.ameba.jp/blog/js/apm001.js'></script>
<script type="text/javascript">
function zenback_clone(){
 $("#zenback-widget-loader").clone().insertAfter(".skinArticle3");
}
function zenback_set(){
 var src_name='//w.zenback.jp/v1/?base_uri=http%3A//ameblo.jp/★/&nsid=115585274838285239%3A%3A115585465427467457&rand='+Math.ceil((new Date()*1)*Math.random());
 $.getScript(src_name,function(){setTimeout("zenback_clone();",2000);});
}
$(document).ready(function(){
 zenback_set();
});
</script>
