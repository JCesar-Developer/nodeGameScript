//http://casual-effects.com
window.include || (window.include = 1, addEventListener("load", function() {
	function e() {
		var e = i.head,
			n = i.body;
		d !== c && (t(e), t(n)), parent.postMessage(o + "=" + e.innerHTML + n.innerHTML, "*");
	}

	function n(e) {
		return e && (/^#|^[A-Za-z]+: \/\/|^\//.test(e) ? e : c + e);
	}

	function t(e) {
		e.src = n(e.src), e.href = n(e.href);
		for(var r = e.children, i = 0; i < r.length; ++i) t(r[i]);
	}

	function r(e) {
		return e && e.substr(0, e.lastIndexOf("/") + 1);
	}
	var i = document,
		a = /([^?]+)(?:\?id=(inc\d+)&p=([^&]+))?/.exec(location.href),
		c = r(a[1]),
		o = a[2],
		d = r(a[3] && decodeURIComponent(a[3])),
		s = [].slice.call(i.getElementsByTagName("include")),
		u = o,
		l = s.length,
		f = l,
		v = "display:none";
	if(l) {
		addEventListener("message", function(n) {
			var t = !1,
				r = n.data.replace(/^(inc\d+)=/, function(e, n) {
					return t = n, "";
				});
			if(t) {
				var a = i.getElementById(t);
				a.outerHTML = r, u && 0 === --f && e();
			}
		});
		var h = 0;
		s.forEach(function(e) {
			var n = e.attributes.src.nodeValue,
				t = "inc" + ++h;
			e.outerHTML = '<iframe src="' + n + "?id=" + t + "&p=" + encodeURIComponent(c) + '"id="' + t + '"style="' + v + '"/>';
		})
	} else u && e();
}));