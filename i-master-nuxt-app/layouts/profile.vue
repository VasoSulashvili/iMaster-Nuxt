<template>
  <div id="main-wrapper">
    <!-- ============================================================== -->
    <!-- Top header  -->
    <!-- ============================================================== -->
    <HeaderNavBar />

    <div class="clearfix"></div>
    <div>
        <!-- ============================ Page Title Start================================== -->
        <!-- <page-title-section title="FAQ's" subTitle="get your all queries here" /> -->
        <!-- ============================ Page Title End ================================== -->
    
        <!-- ======================= dashboard Detail ======================== -->
        <div class="dashboard-wrap bg-light">
            <a class="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
                <i class="fas fa-bars mr-2"></i>Dashboard Navigation
            </a>
            <div class="collapse" id="MobNav">
                <div class="dashboard-nav">
                    <div class="dash-user-blocks pt-5">
                        <div class="jbs-grid-usrs-thumb">
                            <div class="jbs-grid-yuo">
                                <a href="candidate-detail.html"><figure><img src="https://placehold.co/500x500" class="img-fluid circle" alt=""></figure></a>
                            </div>
                        </div>
                        <div class="jbs-grid-usrs-caption mb-3">
                            <div class="jbs-kioyer">
                                <div class="jbs-kioyer-groups">
                                    <span class="fa-solid fa-star active"></span>
                                    <span class="fa-solid fa-star active"></span>
                                    <span class="fa-solid fa-star active"></span>
                                    <span class="fa-solid fa-star active"></span>
                                    <span class="fa-solid fa-star"></span>
                                    <span class="aal-reveis">4.7</span>
                                </div>
                            </div>
                            <div class="jbs-tiosk">
                                <h4 class="jbs-tiosk-title"><a href="candidate-detail.html">Linda D. Strong</a></h4>
                                <div class="jbs-tiosk-subtitle"><span>Front-End Developer</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-inner">
                        <ul data-submenu-title="Main Navigation">
                            <li :class="{'active': route.path === '/profile/password'}">
                              <NuxtLink to="/profile/password"><i class="fas fa-key me-2"></i>Pasword</NuxtLink>
                            </li>
                            <li><NuxtLink to="/profile/two-fa"><i class="fas fa-qrcode me-2"></i>2 FA</NuxtLink></li>
                            <!-- <li class="active"><a href="candidate-profile.html"><i class="fa-regular fa-user me-2"></i>My Profile </a></li>
                            <li><a href="candidate-resume.html"><i class="fa-solid fa-file-pdf me-2"></i>My Resumes</a></li>
                            <li><a href="candidate-applied-jobs.html"><i class="fa-regular fa-paper-plane me-2"></i>Applied jobs</a></li>
                            <li><a href="candidate-alert-job.html"><i class="fa-solid fa-bell me-2"></i>Alert Jobs<span class="count-tag bg-warning">4</span></a></li>
                            <li><a href="candidate-saved-jobs.html"><i class="fa-solid fa-bookmark me-2"></i>Shortlist Jobs</a></li>
                            <li><a href="candidate-follow-employers.html"><i class="fa-solid fa-user-clock me-2"></i>Following Employers</a></li>
                            <li><a href="candidate-messages.html"><i class="fa-solid fa-comments me-2"></i>Messages<span class="count-tag">4</span></a></li>
                            <li><a href="candidate-change-password.html"><i class="fa-solid fa-unlock-keyhole me-2"></i>Change Password</a></li>
                            <li><a href="candidate-delete-account.html"><i class="fa-solid fa-trash-can me-2"></i>Delete Account</a></li>
                            <li><a href="index.html"><i class="fa-solid fa-power-off me-2"></i>Log Out</a></li> -->
                        </ul>
                    </div>					
                </div>
            </div>
            <div class="dashboard-content">

                <slot />
                
            </div>
        </div>
        <!-- ======================= dashboard Detail End ======================== -->	
	</div>

    <Footer />

    <a id="back2Top" class="top-scroll" title="Back to top" href="#"><i class="ti-arrow-up"></i></a>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
useHead({
  bodyAttrs: {
    class: 'green-theme'
  }
})
onMounted(() => {
  const loadStyle = (href) => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = href
      link.onload = resolve
      link.onerror = reject
      document.head.appendChild(link)
    })
  }

  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.async = false
      script.onload = resolve
      script.onerror = reject
      document.body.appendChild(script)
    })
  }

  const loadAssets = async () => {
    // Load CSS first
    await loadStyle('/css/colors.css')
    await loadStyle('/css/styles.css')

    // Then load JS in order
    await loadScript('/js/jquery.min.js')
    await loadScript('/js/popper.min.js')
    await loadScript('/js/bootstrap.min.js')
    await loadScript('/js/rangeslider.js')
    await loadScript('/js/jquery.nice-select.min.js')
    await loadScript('/js/slick.js')
    await loadScript('/js/counterup.min.js')
    await loadScript('/js/custom.js')
  }

  loadAssets()
})
</script>
