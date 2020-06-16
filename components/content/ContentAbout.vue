<template>
  <section>
    <h1>Über slowhiker</h1>
    <p>Hallo, willkomen auf meiner Website! Mein Name ist Mike Hüppi. Zusammen mit meiner Frau und meinen drei Kindern wohne ich in Hüttikon im Furttal. In meiner Freizeit bin ich häufig und gerne in der Natur unterwegs. Dies ist für mich ein
      guter Ausgleich zu meiner Tätigkeit als Frontend Developer.</p>
    <p>Da ich gerne wandere, fotografiere, programmiere und gestalte, lag es auf der Hand, dass ich früher oder später ein solches Projekt realisieren würde, welches alle diese Interessen von mir vereint.</p>
    <h2>Noch ein weiterer Wander-Blog?</h2>
    <p>Während der Zeit der Corona-Pandemie haben meine Familie und ich vermehrt Ausflüge in unmittelbarer Nähe unternommen. Dabei wurde mir bewusst, dass
      zahlreiche einladende und faszinierende Gebiete nicht weit vor unserer Haustüre liegen.</p>
    <p>Mit diesem Blog möchte ich auch andere Menschen inspirieren und dazu einladen, das Schöne in der Nähe zu suchen. Früher bin ich viel in der Welt herum gereist und auch heute gibt es noch entfernte Destinationen, von denen ich träume.
      Doch in der heutigen Zeit macht es Sinn, bewusster und nachhaltiger unterwegs zu sein und sich hin und wieder zu fragen, ob zum Beispiel eine Fernwanderung über den Jura-Höhenweg nicht genauso reizvoll sein kann, wie ein Trekking-Trip nach Alaska, Island oder Nepal.</p>
    <h2>Warum der Name &laquo;slowhiker&raquo;?</h2>
    <p>Der Begriff &laquo;slowhiker&raquo; steht für eine Person, die bewusst eine Form des Wanderns wählt, welche durch Langsamkeit, Achtsamkeit, Nachhaltigkeit und Sinnhaftigkeit geprägt ist, analog zum Begriff Slow Travel. Im Tourismus-Bereich hat
      sich dieser Ausdruck schon seit einiger Zeit etabliert.</p>
    <h2>Ein paar Worte zur Technologie ...</h2>
    <p>Einen solchen Blog hätte ich genauso gut mit WordPress oder einem ähnlichen CMS umsetzen können. Es wäre viel einfacher und mit weniger Aufwand verbunden gewesen. Als Entwickler mit einem Faible für Design war es aber für mich wichtig,
      selber eine solche Anwendung zu realisieren - also ganz &laquo;from scratch&raquo;. Dazu habe ich als Frontend-Technologie die JavaScript Frameworks vue.js und nuxt.js eingesetzt. Als Backend habe ich die Cloud-Lösung Firebase von Google gewählt.
    </p>
  </section>
</template>

<script>
export default {
  name: 'ContentAbout.vue'
}
</script>

<style scoped lang="scss">
  @import '../../assets/styles/colors.scss';
  h1 {
    font-size: 24px;
    font-weight: 400;
    margin: 12px 0 20px 0;
    padding: 0 0 0 0;
    color: $lime;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    margin: 12px 0 0 0;
    padding: 0 0 0 0;
  }
  a {
    color: $blue;
  }
  p {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
  }
</style>
