import React from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Sports() {
  useEffect(() => {
    Aos.init({ duration: 500 })
})
  return (
    <div>
        <div className='relative'>
                <img className=' sm:h-[80vh] h-fit w-full sm:w-screen' src={require("./images/medalist2.jpg")} alt="" />
                </div>
                <section className="dark:bg-gray-800 dark:text-gray-100 ">
                <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12 mt-5" >
                    <a href="/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl">
                      <img src={require("./images/medalist.jpg")} alt="" />
                        <div className="p-6 space-y-2 lg:col-span-5">

                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptas ducimus, velit quos id a veniam praesentium porro blanditiis unde? Nemo, explicabo quaerat eius dolores est distinctio quas voluptatum voluptas saepe accusantium impedit non, fugit facere quisquam corrupti ipsam officiis, architecto natus magnam sint? Enim earum quidem ratione veniam facilis. </p>

                        </div>
                    </a>
                    <a href="/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl font-serif border-solid border-b-2 pb-4 border-blue-800">Lorem ipsum dolor sit amet consectetur.</h3>

                            <img src="./images/medalist.jpg" alt="" className="object-cover w-full h-68 rounded sm:h-full lg:col-span-7 dark:bg-gray-500 pt-5" />
                            <p className=' text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus libero sequi ipsum quae, molestias beatae dicta ex. Beatae rerum cum cumque ex molestiae commodi fugiat quaerat, nesciunt vel nostrum sed aut possimus perferendis ad quibusdam laboriosam laudantium dignissimos, eos voluptate vitae suscipit sapiente sequi. Sequi natus labore minus dolorum.</p>

                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque aut architecto. Nesciunt sapiente ex nemo enim quo, assumenda quos illo quisquam mollitia earum saepe asperiores aut illum necessitatibus quasi facere porro, minus temporibus culpa itaque accusamus! Dolorum, nemo temporibus maxime dolores qui harum, maiores similique voluptatibus ab provident debitis officiis illo commodi ipsam mollitia quidem ipsum. Facilis, quaerat optio! </p>
                            <h1 className='text-3xl font-serif'>Lorem ipsum dolor sit amet consectetur.</h1>
                            <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi minima exercitationem necessitatibus animi iusto placeat laborum voluptas molestiae ut saepe suscipit, consequuntur culpa consectetur recusandae corrupti eaque dolorem neque sapiente debitis. Ipsam architecto, officiis exercitationem tempore praesentium eveniet provident accusantium repellat eligendi harum deserunt quod qui pariatur ex voluptas debitis sapiente deleniti ipsum quam totam aut non nobis! Nesciunt, error.</p>



                        </div>
                    </a>
                    <a href="/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-bold sm:text-4xl font-serif border-solid border-b-2 pb-4 border-blue-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, neque.</h3>

                            <img src={require("./images/medalist.jpg")} alt="" className="object-cover w-full rounded sm:h-[95vh] lg:col-span-7 dark:bg-gray-500 pt-5" />
                            <p className=' text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, enim odio possimus facilis est, deleniti similique, saepe nisi quisquam temporibus dolorum ad vel amet doloribus tempora neque magni? Eius laboriosam error, voluptas corporis quidem dolor fugiat laborum ipsa possimus perspiciatis?  </p>

                            <p className=' text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quisquam earum illo facilis labore repudiandae neque cum odit? Omnis quod odio nisi alias ipsa dignissimos possimus sit fugiat esse cum sint atque iure reiciendis distinctio nostrum, adipisci a. Ad laudantium asperiores dolorum magnam non exercitationem quos est soluta quis accusantium.   </p>
                            <p className=' text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, sint non tempore consequatur dolorem aut delectus obcaecati placeat saepe sequi ea ipsam nihil animi vitae quas quisquam. Consequatur dicta incidunt, fuga laudantium omnis quisquam atque earum quasi ut in praesentium numquam, harum cum molestias ducimus natus veritatis dolore! Quasi aperiam illo, quibusdam obcaecati alias aspernatur magnam repellendus eligendi nisi ducimus at quis, commodi officiis dignissimos, excepturi nostrum. Hic nihil, harum quisquam dolore aspernatur dolorum pariatur dolor reprehenderit maxime a commodi!</p>
                            <p className=' text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit sapiente, autem architecto fuga aperiam nemo aliquid veritatis, repellat neque quidem saepe in placeat. Quos quam consequatur quae a sunt saepe.</p>
                            <p className=' text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora id pariatur laudantium accusantium saepe officia exercitationem veniam nesciunt rerum voluptate illum, consectetur corrupti ratione qui error unde quia sit libero aliquid aut quisquam. Nobis adipisci voluptatum, doloribus esse consequatur earum?</p>
                            <p className=' text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos saepe beatae, a voluptate voluptatum hic architecto ratione cum explicabo labore illo dolorem, sint nam laudantium ducimus, voluptatibus distinctio quisquam quae officiis commodi dolores! Ipsa vitae assumenda harum? Quae cupiditate eligendi doloremque sint ea quod fugiat magnam! Dignissimos blanditiis magni modi, pariatur asperiores eveniet voluptate illum reiciendis eum dolores neque, ipsum amet commodi ex nemo nesciunt quo voluptatem quas dicta! A?</p>
                            <h1 className='text-3xl font-serif'>Lorem.</h1>
                            <p className='text-xl font-sans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto quod, magni ullam natus cum illum odio quam. Commodi quasi dolorem quas quo amet eius iste inventore nihil aspernatur? Sapiente quos totam impedit sint pariatur quidem voluptas eos aspernatur incidunt, dolorum voluptate id perferendis aperiam voluptates culpa est dolore velit modi.</p>
                            <p className='text-xl font-sans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae ea illum quo sit autem, error vel vitae reiciendis asperiores animi iure corporis exercitationem repellendus, natus quibusdam? Dignissimos suscipit deserunt ullam, fugit omnis beatae, amet non repellat tempora earum labore.</p>
                            <p className='text-xl font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum corrupti rem iusto tempore commodi in ab, corporis ex sed at a harum, totam accusamus quod sint reiciendis id. Fugit quidem consequatur ut possimus similique itaque explicabo quaerat error delectus cumque.</p>

                        </div>
                    </a>
                    <a href="/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-bold sm:text-4xl font-serif border-solid border-b-2 pb-4 border-blue-800">AI is enabling 24/7 customer service</h3>

                            <img src={require("./images/medalist.jpg")} alt="" className="w-full rounded sm:h-[70vh] lg:col-span-7 dark:bg-gray-500 pt-5" />
                            <p className=' text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos beatae ut nam nihil laborum? Sapiente soluta tempore dicta eligendi libero!</p>
                           <p className=' text-xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta numquam reiciendis! Reprehenderit corrupti dolorem fugit omnis minus voluptates, quam beatae deleniti perferendis error perspiciatis ratione dolore earum repellendus eveniet necessitatibus commodi delectus assumenda natus possimus architecto explicabo? Libero, ab.</p>
                        </div>
                    </a>
                    <a href="https://gadgetstouse.com/blog/2022/12/07/what-is-e-rupi-how-it-works-banks-benefits/" target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-bold sm:text-4xl font-serif border-solid border-b-2 pb-4 border-blue-800">AI at our homes</h3>

                            <img src={require("./images/medalist.jpg")} alt="" className="object-cover w-full rounded sm:h-fit pb-5 lg:col-span-7 dark:bg-gray-500 pt-5" />
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minus blanditiis molestiae qui sequi expedita cumque magnam corrupti est veritatis repudiandae accusamus, suscipit aperiam provident harum, mollitia porro eligendi ab quod animi tenetur in? Autem nisi sapiente dolor, itaque at ab minima quis earum! Reiciendis optio odit asperiores voluptate iste.</p>
                          
                            <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus amet minus nobis temporibus. Id dolorum provident quidem alias ut ea repellat labore magnam doloremque quasi, fugiat assumenda nemo, numquam qui!</p>
                           


                        </div>
                    </a>
                    <a href=" " target={"_blank"} rel="noopener noreferrer" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline  dark:bg-gray-900 shadow-2xl" data-aos="fade-up">
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-bold sm:text-5xl font-serif border-solid border-b-2 pb-4 border-blue-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui molestias cumque minus maxime. Odit, porro! Repellendus porro rerum quasi voluptates!</h3>

                           <ol className='list-decimal pl-10'>

                            <li className='text-2xl pt-10 pb-16'>Robert Bosch Centre for Data Science and AI at IIT Madras</li>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi minima nostrum ad eum rem vel. Perspiciatis illo adipisci eius reprehenderit officia ullam, praesentium vitae. Earum adipisci rerum molestias nisi in magni atque, tempore dignissimos placeat sapiente veritatis provident dolorum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem alias cupiditate laudantium nulla quam eveniet, repellat molestias qui, quod quidem rerum veritatis corporis eum inventore, cum dolorum aperiam provident corrupti tenetur perferendis nihil possimus. Quos totam magnam facere sit eveniet.</p>

                            <li className='text-2xl pt-16  pb-16 underline'>NV AI Centre at IIT Hyderabad</li>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error atque dolor incidunt blanditiis aut repellendus accusamus eius harum, numquam maxime, molestias, odio tempore? Exercitationem ad sint voluptates modi repudiandae totam nisi cupiditate mollitia at, minima provident esse quibusdam cum labore sequi ipsum sit, deserunt tempore quas dolor earum culpa cumque.   </p>

                            <li className='text-2xl pt-16 pb-16 underline'>Intel AI Research Centre at IIT Hyderabad</li>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, praesentium, quo dolore cupiditate, libero voluptatibus odio provident perspiciatis at expedita qui facere deleniti et officiis vitae ratione ab atque ipsum unde nulla. Eligendi quas possimus eaque, ab dolores fugiat facere aliquid aperiam ullam! Suscipit blanditiis consequatur itaque. Reprehenderit, sequi aliquam itaque non, beatae saepe laudantium dolore pariatur iste quasi velit!</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>Lorem ipsum dolor sit amet.</li>
                            <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nemo rem, hic dignissimos, cupiditate nulla inventore a molestiae cumque, corporis ullam accusantium quos exercitationem non odio provident totam voluptatum nam? Odio sunt quas possimus totam? Ipsa nam, saepe ipsam rerum obcaecati a adipisci, voluptatem quidem rem, debitis itaque corrupti nemo libero aut aliquam laboriosam nihil quae quo id! Tempora, sunt!</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>Lorem ipsum dolor sit amet consectetur.</li>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis iure quo impedit atque explicabo eum mollitia, labore voluptatum corporis pariatur numquam eveniet dolore similique deserunt perferendis consectetur cupiditate delectus laudantium praesentium, nam quod eligendi amet. Quis reprehenderit nesciunt aspernatur nemo! Quae sed vitae eum aliquid, sint eveniet numquam fugiat ea totam repellendus aliquam architecto minima exercitationem molestias excepturi distinctio ut facere eligendi aperiam quibusdam. Autem odit dolore assumenda doloribus soluta!</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>SCAI by Microsoft Research India</li>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate facere fugit odio libero incidunt natus ipsum nihil eaque. Porro aliquam, quos officia accusantium quisquam eius suscipit libero impedit alias, id amet minus ut fuga, doloremque perferendis harum voluptatibus. Voluptatem ducimus animi quidem sapiente magni rerum, esse consequuntur laborum sint sunt, atque quo! Qui itaque sapiente repellat praesentium recusandae eaque rerum molestias, ratione cumque quis harum vitae accusamus omnis, odit voluptatum.</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>Philips Innovation Centre in Bengaluru</li>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repudiandae nesciunt ab, sapiente amet aliquam sunt quia harum non. Nesciunt quam, dolore fuga voluptatum error tempora et magni fugiat facilis dignissimos neque possimus ipsa pariatur harum aut! Dolores quasi ut maiores ex natus, culpa, voluptatibus blanditiis, dolor beatae consequuntur nostrum error explicabo nisi minima iusto animi temporibus vitae iste impedit dignissimos ullam velit. Eos excepturi sed aspernatur tenetur placeat sint?  </p>


                            <li className='text-2xl  pt-16 pb-16 underline'>DAIR at IIT Delhi</li>
                            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sint quisquam maxime. Ullam nobis aut voluptatem animi vitae iusto dolor quasi doloribus, temporibus voluptate nulla commodi obcaecati repellendus! Quis nostrum aliquid veritatis. Provident, animi? Debitis ex vitae eligendi quaerat. Sit, enim, autem, ea suscipit aperiam esse quod eum ad inventore quis ullam aliquam repudiandae molestias beatae iure nisi optio rerum recusandae! Esse id molestias ipsum dolorum mollitia rerum unde ratione? </p>

                            <li className='text-2xl  pt-16 pb-16 underline'>CFILT Lab at IIT, Bombay</li>
                            <p className='text-xl'>The Center for Indian Language Technology (CFILT) is one of the top AI labs in India that was set up with a generous grant from the Department of IT, Government of India in 2000 at IIT Bombay. There are around 30 research members in CFILT for PhD, Master’s, Bachelors and many more with multiple stresses on semantics to research in lexical resources, shallow parsing, machine translation, cognitive NLP, and many more with the integration of artificial intelligence and NLP.</p>

                            <li className='text-2xl  pt-16 pb-16 underline'>CAIR at DRDO, Ministry of Defence, Government of India</li>
                            <p className='text-xl'>The Centre for Artificial Intelligence and Robotics (CAIR) is one of the top artificial intelligence research centres in India focused on R&D in cutting-edge technologies like artificial intelligence, robotics, and information and communication security. The AI research leads to the development of mission-critical products for battlefield secure communication and information management systems. The AI lab is focused on leveraging the developments in cognitive and AI systems for achieving increased autonomy in unmanned systems.</p>

                           </ol>

                        </div>
                    </a>

                </div>
            </section>
            
    </div>
  )
}
