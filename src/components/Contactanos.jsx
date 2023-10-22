import React from "react";

function Contactanos() {
  return (
    <>
      <div className="cont-contactanos relative flex w-full">
        <div className="cont-txt-form flex relative w-[91%]">
          <div className="cont-txt-formu relative flex flex-wrap w-full p-[0_10px_0_30px] bg-white duration-700">
            <div className="vacio1 duration-700 relative w-full h-[10vh]"></div>
            <div className="formu1 relative w-full">
              <div className="formu2 p-[0_20px]">
                <div className="formu3">
                  <div className="formu4 relative ml-[-20px] mr-[-20px]">
                    <div className="formu5 relative">
                      <div className="formu6 relative flex max-w-none">
                        <div className="con-txt flex relative w-[29.9%]">
                          <div className="txt relative flex flex-wrap w-full p-5">
                            <div className="cont-txt1 relative w-full">
                              <div className="txt1 duration-700 text-[26px] text-[#113853] font-bold leading-[26px]">
                                Contacto
                              </div>
                            </div>
                            <div className="cont-txt2 relative w-full">
                              <div className="txt2 duration-700 relative w-full text-black text-[38px] font-bold leading-[40px]">
                                ¡Estamos aquí para ti!
                              </div>
                            </div>
                            <div className="cont-vacio relative w-full h-[4vh]"></div>
                            <div className="cont-txt3 relative w-full mt-3">
                              <div className="txt3 p-[10px_0_0]">
                                <p className="duration-700 m-[10px_auto] text-black text-[19px] font-normal leading-[31px]">
                                  ¡Deja de preocuparte! Es momento de construir
                                  juntos una estrategia para lograr tus
                                  objetivos de marca.
                                </p>
                                <p className="duration-700 m-[10px_auto] text-black text-[19px] font-normal leading-[31px]">
                                  Déjanos tus datos y un ejecutivo comercial se
                                  pondrá en contacto contigo:
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cont-formu relative flex w-[70%]">
                          <div className="formu1 duration-700 w-full relative flex p-4">
                            <div className="formu2 relative w-full max-w-full">
                              <form className="general duration-700 relative w-full max-w-full h-[338px] m-2 p-5">
                                <div className="grupo1 duration-700 flex w-full">
                                  <div className="g1 duration-700 relative w-full max-w-full p-[5px]">
                                    <input
                                      type="text"
                                      id="nombre"
                                      name="nombre"
                                      placeholder="Tu Nombre"
                                      className="duration-700 block w-full min-h-[42px] text-black bg-[#ebebeb] border border-[#ced4da] leading-[1.5] p-[0.375rem_0.75rem] rounded-[15px]"
                                      required
                                    />
                                  </div>
                                  <div className="g1 duration-700 relative w-full max-w-full p-[5px]">
                                    <input
                                      type="text"
                                      id="nombre"
                                      name="nombre"
                                      placeholder="Tu Teléfono"
                                      className="duration-700 block w-full min-h-[42px] text-black bg-[#ebebeb] border border-[#ced4da] leading-[1.5] p-[0.375rem_0.75rem] rounded-[15px]"
                                      required
                                    />
                                  </div>
                                  <div className="g1 duration-700 relative w-full max-w-full p-[5px]">
                                    <input
                                      type="text"
                                      id="nombre"
                                      name="nombre"
                                      placeholder="Tu Correo Electrónico"
                                      className="duration-700 block w-[120%] min-h-[42px] text-black bg-[#ebebeb] border border-[#ced4da] leading-[1.5] p-[0.375rem_0.75rem] rounded-[15px]"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="grupo2 flex duration-700">
                                  <div className="g1 duration-700 relative w-full max-w-full p-[5px]">
                                    <input
                                      type="text"
                                      id="pais"
                                      name="pais"
                                      placeholder="Tu Pais"
                                      className="duration-700 block w-full min-h-[42px] text-black bg-[#ebebeb] border border-[#ced4da] leading-[1.5] p-[0.375rem_0.75rem] rounded-[15px]"
                                      required
                                    />
                                  </div>
                                  <div className="g1 duration-700 relative w-full max-w-full p-[5px]">
                                    <input
                                      type="text"
                                      id="ciudad"
                                      name="ciudad"
                                      placeholder="Tu Ciudad"
                                      className="duration-700 block w-[113%] min-h-[42px] text-black bg-[#ebebeb] border border-[#ced4da] leading-[1.5] p-[0.375rem_0.75rem] rounded-[15px]"
                                      required
                                    />
                                  </div>
                                </div>
                                <div className="grupo3 flex duration-700">
                                  <div className="g1 duration-700 relative w-full max-w-full p-[5px]">
                                    <input
                                      type="text"
                                      id="empresa"
                                      name="empresa"
                                      placeholder="Tu Empresa"
                                      className="duration-700 block w-full min-h-[42px] text-black bg-[#ebebeb] border border-[#ced4da] leading-[1.5] p-[0.375rem_0.75rem] rounded-[15px]"
                                      required
                                    />
                                  </div>
                                  <div className="g1 duration-700 relative w-full max-w-full p-[5px]">
                                    <input
                                      type="text"
                                      id="sitioweb"
                                      name="sitioweb"
                                      placeholder="Sitio Web"
                                      className="duration-700 block w-full min-h-[42px] text-black bg-[#ebebeb] border border-[#ced4da] leading-[1.5] p-[0.375rem_0.75rem] rounded-[15px]"
                                      required
                                    />
                                  </div>
                                  <div className="g1 duration-700 relative w-full max-w-full p-[5px]">
                                    <select
                                      id="opciones"
                                      name="opciones"
                                      className="duration-700 block w-[120%] min-h-[42px] text-black bg-[#ebebeb] border border-[#ced4da] leading-[1.5] p-[0.375rem_0.75rem] rounded-[15px]"
                                    >
                                      <option value="opcion1">
                                        ¿En que estas interesado?
                                      </option>
                                      <option value="opcion2">Branding</option>
                                      <option value="opcion3">
                                        Manejo de redes sociales
                                      </option>
                                      <option value="opcion4">
                                        Diseño publicitario
                                      </option>
                                      <option value="opcion5">
                                        Pagina web en CMS
                                      </option>
                                      <option value="opcion6">
                                        Optimizacion CEO
                                      </option>
                                      <option value="opcion7">
                                        Aplicaciones Web
                                      </option>
                                      <option value="opcion8">
                                        Intranet - Extranet
                                      </option>
                                      <option value="opcion9">
                                        Pagina Web a medida
                                      </option>
                                      <option value="opcion10">
                                        Tiendas online a medida
                                      </option>
                                      <option value="opcion11">
                                        Asesoria y consultoria
                                      </option>
                                      <option value="opcion12">
                                        Despliegue de VPS
                                      </option>
                                      <option value="opcion13">
                                        Administracion web
                                      </option>
                                      <option value="opcion14">
                                        Administracion VPS
                                      </option>
                                      <option value="opcion15">
                                        Bytransload
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="grupo4 relative flex flex-col max-w-[106%] w-[106%] p-[5px]">
                                  <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    rows="4"
                                    placeholder="Mensaje"
                                    required
                                    className="w-[100%] h-full"
                                  ></textarea>
                                </div>
                                <div className="grupo5 relative p-[5px] w-[106%]">
                                  <div className="boton relative flex justify-end">
                                    <button
                                      type="submit"
                                      className="duration-700 w-[20%] flex items-center justify-center h-[43px] text-[18px] p-[6px_8px_6px_12px] bg-[#022d5e] rounded-xl text-white hover:bg-white hover:text-[#022d5e] border border-[#022d5e] font-semibold"
                                    >
                                      Hablemos
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vacio2 duration-700 relative w-full h-[10vh]"></div>
          </div>
        </div>
        <div className="vacio relative w-[9%] bg-white"></div>
      </div>
    </>
  );
}

export default Contactanos;
