<template>
  <t-layout-page>
    <t-layout-page-item></t-layout-page-item>
  </t-layout-page>
</template>
<script>
export default {
  name: 'About',
  props: {
    // channel: String,
    fileUrl: String
  },
  data() {
    return {
      channel: this.$route.query.channel,
      localUserVideo: null,
      remoteUserVideo: [],
      filmStream: null,
      filmVideo: null,
      filmUid: 999999
    }
  },
  computed: {
    isSender() {
      return !!this.fileUrl
    },
    isReceiver() {
      return !this.fileUrl
    },
    filmVideoConfig() {
      const track = this.filmStream
        ? this.filmStream.getVideoTracks()[0]
        : null
      return {
        mediaStreamTrack: track
      }
    },
    filmAudioConfig() {
      const track = this.filmStream
        ? this.filmStream.getAudioTracks()[0]
        : null

      return {
        mediaStreamTrack: track
      }
    }
  },
  mounted() {
    console.log('参数----', this.$route.query.channel, this.isSender, this.isReceiver, this.filmVideoConfig)
    this.channel = this.$route.query.channel
    // if (this.isSender) {
    //   const filmPlayer = this.$refs.film_player
    //   filmPlayer.src = this.fileUrl
    //   filmPlayer.onplay = () => {
    //     // adapter of firefox
    //     const stream = filmPlayer.mozCaptureStream
    //       ? filmPlayer.mozCaptureStream()
    //       : filmPlayer.captureStream()
    //     stream.onactive = () => {
    //       this.filmStream = stream
    //     }
    //   }
    //   filmPlayer.play()
    // }
  },
  methods: {
    handleLocalUserVideo(video) {
      this.localUserVideo = video
    },
    handleRemoteVideoVideo(videos) {
      this.remoteUserVideo = videos.filter((v) => v.uid !== this.filmUid)
      if (this.isReceiver) {
        this.filmVideo = videos.find((v) => v.uid === this.filmUid)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .film-player {
    width: calc(100% - 200px);
    height: 100%;
  }

  .player {
    overflow: hidden;
    background-color: black;
  }

  .user {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
  }

  .film-player-video {
    width: 100%;
    height: 100%;
  }

  .user-player {
    width: 400px;
    height: 400px;
    margin: 5px 0;
  }
}
</style>
