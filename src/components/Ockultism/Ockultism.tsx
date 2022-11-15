import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./Ockultism.css";
import { useState } from "react";

const Ockultism = () => {
  const [Alive1, setAlive1] = useState<boolean>(true);
  const [Alive2, setAlive2] = useState<boolean>(true);
  const [Alive3, setAlive3] = useState<boolean>(true);
  const [Alive4, setAlive4] = useState<boolean>(true);
  const [Alive5, setAlive5] = useState<boolean>(true);
  const [Alive6, setAlive6] = useState<boolean>(true);

  return (
    <div className="occult-page animate__animated animate__fadeIn animate__slow">
      <h1 className="occult-header">Abbey Park</h1>
      <aside>Occult handbook</aside>
      <div>
        The occult, in the broadest sense, is a category of esoteric
        supernatural beliefs and practices which generally fall outside the
        scope of religion and science, encompassing phenomena involving
        otherworldly agency, such as magic. It can also refer to supernatural
        ideas like extra-sensory perception and parapsychology.
      </div>
      <br />
      <div>
        The term occult sciences was used in 16th-century Europe to refer to
        astrology, alchemy, and natural magic, which today are considered
        pseudosciences. The term occultism emerged in 19th-century France, where
        it came to be associated with various French esoteric groups connected
        to Éliphas Lévi and Papus, and in 1875 was introduced into the English
        language by the esotericist Helena Blavatsky.
      </div>
      <br />
      <div>
        Throughout the 20th century, the term was used idiosyncratically by a
        range of different authors, but by the 21st century was commonly
        employed - including by academic scholars of esotericism - to refer to a
        range of esoteric currents that developed in the mid-19th century and
        their descendants. Occultism is thus often used to categorise such
        esoteric traditions as Spiritualism, Theosophy, Anthroposophy, the
        Hermetic Order of the Golden Dawn, and New Age.
      </div>
      <br />
      <div>
        Use of the term as a nominalized adjective has developed especially
        since the late twentieth century. In that same period, occult and
        culture were combined to form the neologism occulture.
      </div>

      <div className="occult-dropdown">
        <div
          onClick={() => {
            setAlive1(!Alive1);
          }}
        >
          {Alive1 ? (
            <FontAwesomeIcon icon={faChevronDown} className="chevron" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} className="chevron" />
          )}
        </div>

        <h2 className="occult-dropdown-h2">Etymology</h2>
      </div>
      {Alive1 ? (
        <></>
      ) : (
        <div className="occult-section">
          <div>
            The occult (from the Latin word occultus "clandestine, hidden,
            secret") is "knowledge of the hidden". In common usage, occult
            refers to "knowledge of the paranormal", as opposed to "knowledge of
            the measurable", usually referred to as science. The term is
            sometimes taken to mean knowledge that "is meant only for certain
            people" or that "must be kept hidden", but for Theosophist Helena
            Blavatsky it is simply the study of a deeper spiritual reality that
            extends beyond pure reason and the physical sciences. The terms
            esoteric and arcane can also be used to describe the occult, in
            addition to their meanings unrelated to the supernatural. The term
            occult sciences was used in the 16th century to refer to astrology,
            alchemy, and natural magic, which today are considered
            pseudosciences.
          </div>
          <br />
          <div>
            The earliest known usage of the term occultism is in the French
            language, as l'occultisme. In this form it appears in A. de
            Lestrange's article that was published in Jean-Baptiste Richard de
            Randonvilliers' Dictionnaire des mots nouveaux ("Dictionary of new
            words") in 1842. However, it was not related, at this point, to the
            notion of Ésotérisme chrétien, as has been claimed by Hanegraaff,
            but to describe a political "system of occulticity" that was
            directed against priests and aristocrats.
          </div>
          <br />
          <div>
            In 1853, the Freemasonic author Jean-Marie Ragon had already used
            occultisme in his popular work Maçonnerie occulte, relating it to
            earlier practices that, since the Renaissance, had been termed
            "occult sciences" or "occult philosophy", but also to the recent
            socialist teachings of Charles Fourier. The French esotericist
            Éliphas Lévi then used the term in his influential book on ritual
            magic, Dogme et rituel de la haute magie, first published in 1856.
            Lévi was familiar with that work and might have borrowed the term
            from there. In any case, Lévi also claimed to be a representative of
            an older tradition of occult science or occult philosophy. It was
            from his usage of the term occultisme that it gained wider usage;
            according to Faivre, Lévi was "the principal exponent of esotericism
            in Europe and the United States" at that time. The term occultism
            emerged in 19th-century France, where it came to be associated with
            various French esoteric groups connected to Éliphas Lévi and Papus,
          </div>
          <br />
          <div>
            The earliest use of the term occultism in the English language
            appears to be in "A Few Questions to 'Hiraf'", an 1875 article
            published in the American Spiritualist magazine, Spiritual
            Scientist. The article had been written by Helena Blavatsky, a
            Russian émigré living in the United States who founded the religion
            of Theosophy.
          </div>
          <br />
          <div>
            Various twentieth-century writers on the subject used the term
            occultism in different ways. Some writers, such as the German
            philosopher Theodor W. Adorno in his "Theses Against Occultism",
            employed the term as a broad synonym for irrationality. In his 1950
            book L'occultisme, Robert Amadou used the term as a synonym for
            esotericism, an approach that the later scholar of esotericism Marco
            Pasi suggested left the term superfluous. Unlike Amadou, other
            writers saw occultism and esotericism as different, albeit related,
            phenomena. In the 1970s, the sociologist Edward Tiryakian
            distinguished between occultism, which he used in reference to
            practices, techniques, and procedures, and esotericism, which he
            defined as the religious or philosophical belief systems on which
            such practices are based. This division was initially adopted by the
            early academic scholar of esotericism, Antoine Faivre, although he
            later abandoned it; it has been rejected by most scholars who study
            esotericism.
          </div>
          <br />
          <div>
            By the 21st century the term was commonly employed - including by
            academic scholars of esotericism - to refer to a range of esoteric
            currents that developed in the mid-19th century and their
            descendants. Occultism is thus often used to categorise such
            esoteric traditions as Spiritualism, Theosophy, Anthroposophy, the
            Hermetic Order of the Golden Dawn, and New Age.
          </div>
          <br />
          <div>
            A different division was used by the Traditionalist author René
            Guénon, who used esotericism to describe what he believed was the
            Traditionalist, inner teaching at the heart of most religions, while
            occultism was used pejoratively to describe new religions and
            movements that he disapproved of, such as Spiritualism, Theosophy,
            and various secret societies. Guénon's use of this terminology was
            adopted by later writers like Serge Hutin and Luc Benoist. As noted
            by Hanegraaff, Guénon's use of these terms are rooted in his
            Traditionalist beliefs and "cannot be accepted as scholarly valid".
          </div>
          <br />
          <div>
            The term occultism derives from the older term occult, much as the
            term esotericism derives from the older term esoteric. However, the
            historian of esotericism Wouter Hanegraaff stated that it was
            important to distinguish between the meanings of the term occult and
            occultism. Occultism is not a homogenous movement and is widely
            diverse.
          </div>
          <br />
          <div>
            Over the course of its history, the term occultism has been used in
            various different ways. However, in contemporary uses, occultism
            commonly refers to forms of esotericism that developed in the
            nineteenth century and their twentieth-century derivations. In a
            descriptive sense, it has been used to describe forms of esotericism
            which developed in nineteenth-century France, especially in the
            Neo-Martinist environment. According to the historian of esotericism
            Antoine Faivre, it is with the esotericist Éliphas Lévi that "the
            occultist current properly so-called" first appears. Other prominent
            French esotericists involved in developing occultism included Papus,
            Stanislas de Guaita, Joséphin Péladan, Georges-Albert Puyou de
            Pouvourville, and Jean Bricaud.
          </div>
        </div>
      )}
      <div className="occult-dropdown">
        <div
          onClick={() => {
            setAlive2(!Alive2);
          }}
        >
          {Alive2 ? (
            <FontAwesomeIcon icon={faChevronDown} className="chevron" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} className="chevron" />
          )}
        </div>

        <h2 className="occult-dropdown-h2">Occult Sciences</h2>
      </div>
      {Alive2 ? (
        <></>
      ) : (
        <div className="occult-section">
          <div>
            The idea of "occult sciences" developed in the sixteenth century.
            The term usually encompassed three practices - astrology, alchemy,
            and natural magic - although sometimes various forms of divination
            were also included rather than being subsumed under natural magic.
            These were grouped together because, according to the Dutch scholar
            of hermeticism Wouter Hanegraaff, "each one of them engaged in a
            systematic investigation of nature and natural processes, in the
            context of theoretical frameworks that relied heavily on a belief in
            occult qualities, virtues or forces." Although there are areas of
            overlap between these different occult sciences, they are separate
            and in some cases practitioners of one would reject the others as
            being illegitimate.
          </div>
          <br />
          <div>
            During the Age of Enlightenment, occultism increasingly came to be
            seen as intrinsically incompatible with the concept of science. From
            that point on, use of "occult science(s)" implied a conscious
            polemic against mainstream science. Nevertheless, the philosopher
            and card game historian Michael Dummett, whose analysis of the
            historical evidence suggested that fortune-telling and occult
            interpretations using cards were unknown before the 18th century,
            said that the term occult science was not misplaced because "people
            who believe in the possibility of unveiling the future or of
            exercising supernormal powers do so because the efficacy of the
            methods they employ coheres with some systematic conception which
            they hold of the way the universe functions...however flimsy its
            empirical basis."
          </div>
          <br />
          <div>
            In his 1871 book Primitive Culture, the anthropologist Edward Tylor
            used the term "occult science" as a synonym for magic.
          </div>
        </div>
      )}
      <div className="occult-dropdown">
        <div
          onClick={() => {
            setAlive3(!Alive3);
          }}
        >
          {Alive3 ? (
            <FontAwesomeIcon icon={faChevronDown} className="chevron" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} className="chevron" />
          )}
        </div>

        <h2 className="occult-dropdown-h2">Occult Qualities</h2>
      </div>
      {Alive3 ? (
        <></>
      ) : (
        <div className="occult-section">
          <div>
            Occult qualities are properties that have no known rational
            explanation; in the Middle Ages, for example, magnetism was
            considered an occult quality. Aether is another such element.
            Newton's contemporaries severely criticized his theory that gravity
            was effected through "action at a distance", as occult.
          </div>
        </div>
      )}
      <div className="occult-dropdown">
        <div
          onClick={() => {
            setAlive4(!Alive4);
          }}
        >
          {Alive4 ? (
            <FontAwesomeIcon icon={faChevronDown} className="chevron" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} className="chevron" />
          )}
        </div>

        <h2 className="occult-dropdown-h2">Occultism</h2>
      </div>
      {Alive4 ? (
        <></>
      ) : (
        <div className="occult-section">
          <div>
            In the English-speaking world, prominent figures in the development
            of occultism included Helena Blavatsky and other figures associated
            with her Theosophical Society, senior figures in the Hermetic Order
            of the Golden Dawn like William Wynn Westcott and Samuel Liddell
            MacGregor Mathers, as well as other individuals such as Paschal
            Beverly Randolph, Emma Hardinge Britten, Arthur Edward Waite, and -
            in the early twentieth century - Aleister Crowley, Dion Fortune, and
            Israel Regardie. By the end of the nineteenth century, occultist
            ideas had also spread into other parts of Europe, such as the German
            Empire, Austria-Hungary, and the Kingdom of Italy.
          </div>
          <br />
          <div>
            Unlike older forms of esotericism, occultism does not reject
            "scientific progress or modernity". Lévi had stressed the need to
            solve the conflict between science and religion, something that he
            believed could be achieved by turning to what he thought was the
            ancient wisdom found in magic. The French scholar of Western
            esotericism Antoine Faivre noted that rather than outright accepting
            "the triumph of scientism", occultists sought "an alternative
            solution", trying to integrate "scientific progress or modernity"
            with "a global vision that will serve to make the vacuousness of
            materialism more apparent". The Dutch scholar of hermeticism Wouter
            Hanegraaff remarked that occultism was "essentially an attempt to
            adapt esotericism" to the "disenchanted world", a post-Enlightenment
            society in which growing scientific discovery had eradicated the
            "dimension of irreducible mystery" previously present. In doing so,
            he noted, occultism distanced itself from the "traditional
            esotericism" which accepted the premise of an "enchanted" world.
            According to the British historian of Western esotericism Nicholas
            Goodrick-Clarke, occultist groups typically seek "proofs and
            demonstrations by recourse to scientific tests or terminology".
          </div>
          <br />
          <div>
            In his work about Lévi, the German historian of religion Julian
            Strube has argued that the occultist wish for a "synthesis" of
            religion, science, and philosophy directly resulted from the context
            of contemporary socialism and progressive Catholicism. Similar to
            spiritualism, but in declared opposition to it, the emergence of
            occultism should thus be seen within the context of radical social
            reform, which was often concerned with establishing new forms of
            "scientific religion" while at the same time propagating the revival
            of an ancient tradition of "true religion". Indeed, the emergence of
            both modern esotericism and socialism in July Monarchy France have
            been inherently intertwined.
          </div>
          <br />
          <div>
            Another feature of occultists is that - unlike earlier esotericists
            - they often openly distanced themselves from Christianity, in some
            cases (like that of Crowley) even adopting explicitly anti-Christian
            stances. This reflected how pervasive the influence of
            secularisation had been on all areas of European society. In
            rejecting Christianity, these occultists sometimes turned towards
            pre-Christian belief systems and embraced forms of Modern Paganism,
            while others instead took influence from the religions of Asia, such
            as Hinduism and Buddhism. In various cases, certain occultists did
            both. Another characteristic of these occultists was the emphasis
            that they placed on "the spiritual realization of the individual",
            an idea that would strongly influence the twentieth-century New Age
            and Human Potential Movement. This spiritual realization was
            encouraged both through traditional Western 'occult sciences' like
            alchemy and ceremonial magic, but by the start of the twentieth
            century had also begun to include practices drawn from non-Western
            contexts, such as yoga.
          </div>
          <br />
          <div>
            Although occultism is distinguished from earlier forms of
            esotericism, many occultists have also been involved in older
            esoteric currents. For instance, occultists like François-Charles
            Barlet and Rudolf Steiner were also theosophers, adhering to the
            ideas of the early modern Christian thinker Jakob Bohme, and seeking
            to integrate ideas from Bohmian theosophy and occultism. It has been
            noted, however, that this distancing from the Theosophical Society
            should be understood in the light of polemical identity formations
            amongst esotericists towards the end of the nineteenth century.
          </div>
          <h3 className="occult-section-sub-header">Etic uses of the term</h3>
          <div>
            n the mid-1990s, a new definition of "occultism" was put forth by
            Wouter Hanegraaff. According to Hanegraaff, the term occultism can
            be used not only for the nineteenth-century groups which openly
            self-described using that term but can also be used in reference to
            "the type of esotericism that they represent".
          </div>
          <br />
          <div>
            Seeking to define occultism so that the term would be suitable "as
            an etic category" for scholars, Hanegraaff devised the following
            definition: "a category in the study of religions, which comprises
            "all attempts by esotericists to come to terms with a disenchanted
            world or, alternatively, by people in general to make sense of
            esotericism from the perspective of a disenchanted secular world".
            Hanegraaff noted that this etic usage of the term would be
            independent of emic usages of the term employed by occultists and
            other esotericists themselves.
          </div>
          <br />
          <div>
            In this definition, occultism covers many esoteric currents that
            have developed from the mid-nineteenth century onward, including
            Spiritualism, Theosophy, the Hermetic Order of the Golden Dawn, and
            the New Age. Employing this etic understanding of "occultism",
            Hanegraaff argued that its development could begin to be seen in the
            work of the Swedish esotericist Emanuel Swedenborg and in the
            Mesmerist movement of the eighteenth century, although added that
            occultism only emerged in "fully-developed form" as Spiritualism, a
            movement that developed in the United States during the
            mid-nineteenth century.
          </div>
          <br />
          <div>
            Marco Pasi suggested that the use of Hanegraaff's definition might
            cause confusion by presenting a group of nineteenth-century
            esotericists who called themselves "occultists" as just one part of
            a broader category of esotericists whom scholars would call
            "occultists".
          </div>
          <br />
          <div>
            Following these discussions, Julian Strube argued that Lévi and
            other contemporary authors who would now be regarded as esotericists
            developed their ideas not against the background of an esoteric
            tradition in the first place. Rather, Lévi's notion of occultism
            emerged in the context of highly influential radical socialist
            movements and widespread progressive, so-called neo-Catholic ideas.
            This further complicates Hanegraaff's characteristics of occultism,
            since, throughout the nineteenth century, they apply to these
            reformist movements rather than to a supposed group of esotericists.
          </div>
        </div>
      )}
      <div className="occult-dropdown">
        <div
          onClick={() => {
            setAlive5(!Alive5);
          }}
        >
          {Alive5 ? (
            <FontAwesomeIcon icon={faChevronDown} className="chevron" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} className="chevron" />
          )}
        </div>

        <h2 className="occult-dropdown-h2">Modern usage</h2>
      </div>
      {Alive5 ? (
        <></>
      ) : (
        <div className="occult-section">
          <div>
            The term occult has also been used as a substantivized adjective as
            "the occult", a term that has been particularly widely used among
            journalists and sociologists. This term was popularised by the
            publication of Colin Wilson's 1971 book The Occult. This term has
            been used as an "intellectual waste-basket" into which a wide array
            of beliefs and practices have been placed because they do not fit
            readily into the categories of religion or science. According to
            Hanegraaff, "the occult" is a category into which gets placed a
            range of beliefs from "spirits or fairies to parapsychological
            experiments, from UFO-abductions to Oriental mysticism, from vampire
            legends to channelling, and so on".
          </div>
          <h3 className="occult-section-sub-header">Occulture</h3>
          <div>
            The neologism occulture used within the industrial music scene of
            the late twentieth century was probably coined by one of its central
            figures, the musician and occultist Genesis P-Orridge. The scholar
            of religion Christopher Partridge used the term in an academic
            sense, stating that occulture was "the new spiritual environment in
            the West; the reservoir feeding new spiritual springs; the soil in
            which new spiritualities are growing".
          </div>
        </div>
      )}
      <div className="occult-dropdown">
        <div
          onClick={() => {
            setAlive6(!Alive6);
          }}
        >
          {Alive6 ? (
            <FontAwesomeIcon icon={faChevronDown} className="chevron" />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} className="chevron" />
          )}
        </div>

        <h2 className="occult-dropdown-h2">Occultism and technology</h2>
      </div>
      {Alive6 ? (
        <div className="occult-bottom"></div>
      ) : (
        <div className="occult-section">
          <div className="occult-bottom">
            Recently scholars have offered perspectives on the occult as
            intertwined with media and technology. Examples include the work of
            film and media theorist Jeffrey Sconce and religious studies scholar
            John Durham Peters, both of whom suggest that occult movements
            historically utilize media and apparati as tools to reveal hidden
            aspects of reality or laws of nature. Erik Davis in his book
            Techgnosis gives an overview of occultism both ancient and modern
            from the perspective of cybernetics and information technologies.
            Philosopher Eugene Thacker discusses Agrippa's 'occult philosophy'
            in his book In The Dust Of This Planet, where he shows how the
            horror genre utilizes occult themes to reveal hidden realities.
          </div>
        </div>
      )}
    </div>
  );
};

export default Ockultism;
