/* ==========================================================
   صفحة الأعمال

   كل بطاقة تمثل مشروعاً.

   لاحقاً سنضيف صوراً حقيقية.
========================================================== */

export default function ProjectsPage() {

    return (

        <main className="min-h-screen bg-slate-950 text-white">

            <div className="max-w-7xl mx-auto px-8 py-32">

                <h1 className="text-5xl font-black mb-5">

                    My Portfolio

                </h1>

                <p className="text-slate-400 mb-14">

                    Selected branding, print and social media projects.

                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* المشروع الأول */}

                    <div className="rounded-3xl bg-slate-900 p-6 border border-slate-800 hover:border-blue-500 duration-300">

                        <div className="h-52 rounded-2xl bg-slate-800 flex items-center justify-center">

                            Project Image

                        </div>

                        <h2 className="text-2xl font-bold mt-6">

                            Brand Identity

                        </h2>

                        <p className="text-slate-400 mt-3">

                            Logo design with complete visual identity.

                        </p>

                    </div>

                    {/* المشروع الثاني */}

                    <div className="rounded-3xl bg-slate-900 p-6 border border-slate-800 hover:border-blue-500 duration-300">

                        <div className="h-52 rounded-2xl bg-slate-800 flex items-center justify-center">

                            Project Image

                        </div>

                        <h2 className="text-2xl font-bold mt-6">

                            Social Media

                        </h2>

                        <p className="text-slate-400 mt-3">

                            Instagram & Facebook campaign.

                        </p>

                    </div>

                    {/* المشروع الثالث */}

                    <div className="rounded-3xl bg-slate-900 p-6 border border-slate-800 hover:border-blue-500 duration-300">

                        <div className="h-52 rounded-2xl bg-slate-800 flex items-center justify-center">

                            Project Image

                        </div>

                        <h2 className="text-2xl font-bold mt-6">

                            Printing Design

                        </h2>

                        <p className="text-slate-400 mt-3">

                            Flyer, brochure and business card.

                        </p>

                    </div>

                </div>

            </div>

        </main>

    );

}