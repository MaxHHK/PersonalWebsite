b = 1
e = 20
category = 'sea'
single = '''
                                    <!-- swiper-slide-->  
                                    <div class="swiper-slide hov_zoom">
                                        <div class="anim-fw">
                                            <img src="Works/%s/%d_%s.jpg" alt="">
                                            <a href="Works/%s/%d_%s.jpg" class="box-media-zoom   popup-image"><i class="fal fa-search"></i></a>
                                        </div>
                                    </div>
                                    <!-- swiper-slide end-->
'''
out_s = ''
for i in range(b, e+1):
    out_s += single % (category, i, category, category, i, category)

print(out_s)