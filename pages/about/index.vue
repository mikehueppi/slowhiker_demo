<template>
  <v-layout align-center justify-center>
    <div class="page" id="about">
      <v-responsive class="mx-auto about-container">
        <v-card
        >
          <v-row no-gutters>
            <v-col cols="12" md="4" class="about-img">
              <v-img
                src="/img/mike_kids.jpg"
                max-width="360"
                max-height="480"
              />
            </v-col>
            <v-col cols="12" md="8" class="about-description">
              <h1>Über slowhiker</h1>
              <p>Hallo, willkomen auf meiner Website! Mein Name ist Mike Hüppi. Zusammen mit meiner Frau und meinen drei Kindern wohne ich in Hüttikon im Furttal. In meiner Freizeit bin ich häufig und gerne in der Natur unterwegs. Dies ist für mich ein
                guter Ausgleich zu meiner Tätigkeit als Frontend Engineer.</p>
              <p>Da ich gerne wandere, fotografiere, programmiere und gestalte, lag es auf der Hand, dass ich früher oder später ein solches Projekt realisieren würde, welches alle diese Interessen von mir vereint.</p>
              <h2>Noch ein weiterer Wander-Blog?</h2>
              <p>Während der Zeit der Corona-Pandemie haben meine Familie und ich vermehrt Ausflüge in unmittelbarer Nähe unternommen. Dabei wurde mir bewusst, dass
                zahlreiche einladende und faszinierende Gebiete nicht weit vor unserer Haustüre liegen.</p>
              <p>Mit diesem Blog möchte ich auch andere Menschen inspirieren und dazu einladen, das Schöne in der Nähe zu suchen. Früher bin ich viel in der Welt herum gereist und auch heute gibt es noch entfernte Destinationen, von denen ich träume
                (unter anderem eine grössere Skandinavien-Reise). Doch in der heutigen Zeit macht es Sinn, bewusster und nachhaltiger unterwegs zu sein und
                sich hin und wieder zu fragen, ob zum Beispiel eine Fernwanderung über den Jura-Höhenweg nicht genauso reizvoll sein kann, wie ein Trekking-Trip nach Island oder Nepal.</p>
              <h2>Warum der Name &laquo;slowhiker&raquo;?</h2>
              <p>Der Begriff &laquo;slowhiker&raquo; steht für eine Person, die bewusst eine alternative Form des Wanderns wählt, welche durch Gemächlichkeit, Nachhaltigkeit und Sinnhaftigkeit geprägt ist, analog zum Begriff <em>Slow Travel</em>. Im Tourismus-Bereich hat
                sich dieser Ausdruck schon seit einiger Zeit etabliert.</p>
              <h2>Ein paar Worte zur Technologie ...</h2>
              <p>Einen solchen Blog hätte ich genauso gut mit <em>WordPress</em> oder einem ähnlichen CMS umsetzen können. Es wäre viel einfacher und mit weniger Aufwand verbunden gewesen. Als Entwickler mit einem Faible für Design war es aber für mich wichtig,
                selber eine solche Anwendung zu realisieren - also ganz &laquo;from scratch&raquo;. Dazu habe ich als Frontend-Technologie die JavaScript Frameworks <em>vue.js</em> und <em>nuxt.js</em> eingesetzt. Als Backend habe ich die Cloud-Lösung <em>Firebase</em> von Google gewählt.
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-responsive>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'index.vue'
}
</script>

<style scoped>
  .about-container {
    padding: 110px 10px 40px 10px;
  }
  .about-img {
    padding: 52px 20px 10px 40px;
  }
  .about-description {
    padding: 40px 60px 40px 40px;
  }
  .about-description h1 {
    font-size: 24px;
    font-weight: 500;
    margin: 12px 0 8px 0;
    padding: 0 0 0 0;
  }
  .about-description h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 12px 0 0 0;
    padding: 0 0 0 0;
  }
  .about-description p {
    font-size: 14px;
    font-weight: normal;
    margin: 0 0 0 0;
    padding: 0 0 12px 0;
  }
</style>
