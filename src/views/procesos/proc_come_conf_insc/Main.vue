<template>
  <section id="main">
    <div class="d-block d-md-none mb-2">
      <b-button
        variant="primary"
        block
        class="mb-1"
        @click="proc_come_conf_insc_gene()"
      >
        <feather-icon
          icon="SearchIcon"
          class="mr-50 text-black"
        />
        <span class="text-black">
          Generar
        </span>
      </b-button>
      <b-button
        variant="success"
        block
        class="mb-1"
        @click="proc_come_conf_insc_apro()"
      >
        <feather-icon
          icon="UserCheckIcon"
          class="mr-50"
        />
        <span class="">
          Aprobar
        </span>
      </b-button>
      <b-button
        variant="danger"
        block
        class="mb-1"
        @click="proc_come_conf_insc_rech()"
      >
        <feather-icon
          icon="UserXIcon"
          class="mr-50"
        />
        Rechazar
      </b-button>
      <b-button
        variant="danger"
        block
        @click="proc_come_conf_insc_limp()"
      >
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Limpiar
      </b-button>
    </div>
    <div class="d-none d-md-flex align-items-center justify-content-end mb-2">
      <b-button
        variant="primary"
        class="ml-1"
        @click="proc_come_conf_insc_gene()"
      >
        <feather-icon
          icon="SearchIcon"
          class="mr-50 text-black"
        />
        <span class="text-black">
          Generar
        </span>
      </b-button>
      <b-button
        variant="success"
        class="ml-1"
        @click="proc_come_conf_insc_apro()"
      >
        <feather-icon
          icon="UserCheckIcon"
          class="mr-50"
        />
        <span class="">
          Aprobar
        </span>
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="proc_come_conf_insc_rech()"
      >
        <feather-icon
          icon="UserXIcon"
          class="mr-50"
        />
        Rechazar
      </b-button>
      <b-button
        variant="success"
        class="ml-1 d-none d-lg-block"
        @click="proc_come_conf_insc_exce()"
      >
        <feather-icon
          icon="DownloadIcon"
          class="mr-50"
        />
        Excel
      </b-button>
      <b-button
        variant="danger"
        class="ml-1"
        @click="proc_come_conf_insc_limp()"
      >
        <feather-icon
          icon="FileIcon"
          class="mr-50"
        />
        Limpiar
      </b-button>
    </div>
    <b-row>
      <b-col>
        <selectCampanaZona
          :array-campana="dataCampana"
          :array-zona="dataZona"
          :multiple-zona="true"
          @campana="setCampana"
          @zona="setZona"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <JqxGrid
            ref="proc_come_conf_insc_grid_glob"
            :width="'100%'"
            :height="height"
            :columns="columnsGlobal"
            :source="dataAdapterGlobal"
            :theme="'sami'"
            :columnsresize="true"
            :sortable="true"
            :sortmode="'many'"
            :filterable="true"
            :altrows="false"
            :selectionmode="'singlerow'"
            :enablebrowserselection="true"
            :showemptyrow="false"
            :columnsreorder="true"
            :enablehover="false"
            :groupable="false"
            :autoshowfiltericon="true"
            :enableanimations="true"
            :localization="localization"
            :showrowlines="true"
            :showcolumnlines="false"
            :showcolumnheaderlines="true"
            :editable="false"
            :scrollmode="'logical'"
            @rowdoubleclick="proc_come_conf_insc_grid_glob_sele($event)"
          />
        </b-card>
      </b-col>
    </b-row>
    <vs-popup
      title="Confirmar Preinscripción"
      fullscreen
      :active.sync="popupActive"
      class-content="scrollbar"
      :background-color-popup="clasePopUp"
      @close="proc_come_conf_insc_cerr()"
    >
      <div class="d-block d-md-none mb-2">
        <b-button
          variant="primary"
          block
          @click="proc_come_conf_insc_regi()"
        >
          <feather-icon
            icon="SaveIcon"
            class="mr-50 text-black"
          />
          <span class="text-black">
            Grabar
          </span>
        </b-button>
      </div>
      <div class="d-none d-md-flex align-items-center justify-content-end">
        <b-button
          variant="primary"
          class="ml-1"
          @click="proc_come_conf_insc_regi()"
        >
          <feather-icon
            icon="SaveIcon"
            class="mr-50 text-black"
          />
          <span class="text-black">
            Grabar
          </span>
        </b-button>
      </div>
      <b-tabs v-model="tabIndex">
        <b-tab title="Datos Personales">
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Tipo Documento
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refTipoDocumento"
                v-model="seleccionTipoDocumento"
                :options="dataTipoDocumento"
                class="w-100"
              >
                <span
                  slot="no-options"
                  @click="$refs.refTipoDocumento.open = false"
                >
                  Tipo documento no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Nro Documento
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refNroDocumento"
                v-model="nroDocumento"
                disabled
                placeholder="Nro Documento"
                @keypress="proc_come_conf_insc_bind_nume_docu($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Nombre(s)
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refNombre"
                v-model="nombre"
                placeholder="Nombre(s)"
                @keypress="proc_come_conf_insc_bind_nomb_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Apellido(s)
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refApellido"
                v-model="apellido"
                placeholder="Apellido(s)"
                @keypress="proc_come_conf_insc_bind_apel_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Sexo
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-radio-group>
                <b-form-radio
                  v-model="sexo"
                  value="F"
                  class="custom-control-primary"
                >
                  Femenino
                </b-form-radio>
                <b-form-radio
                  v-model="sexo"
                  value="M"
                  class="custom-control-primary"
                >
                  Masculino
                </b-form-radio>
              </b-form-radio-group>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="Dirección">
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Departamento
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refDepartamento"
                v-model="seleccionDepartamento"
                :options="dataDepartamento"
                class="w-100 dropdown-150"
                placeholder="Seleccionar Departamento"
                @input="proc_come_conf_insc_inpu_dpto()"
              >
                <span
                  slot="no-options"
                  @click="$refs.refDepartamento.open = false"
                >
                  Departamento no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Provincia
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refProvincia"
                v-model="seleccionProvincia"
                :options="dataProvincia"
                class="w-100 dropdown-150"
                placeholder="Seleccionar Provincia"
                @input="proc_come_conf_insc_inpu_prov()"
              >
                <span
                  slot="no-options"
                  @click="$refs.refProvincia.open = false"
                >
                  Provincia no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Distrito
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refDistrito"
                v-model="seleccionDistrito"
                :options="dataDistrito"
                class="w-100 dropdown-150"
                placeholder="Seleccionar Distrito"
              >
                <span
                  slot="no-options"
                  @click="$refs.refDistrito.open = false"
                >
                  Distrito no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Tipo Via
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refTipoVia"
                v-model="seleccionTipoVia"
                :options="dataTipoVia"
                class="w-100 dropdown-100"
                placeholder="Seleccionar Tipo Via"
              >
                <span
                  slot="no-options"
                  @click="$refs.refTipoVia.open = false"
                >
                  Tipo via no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Dirección
            </b-col>
            <b-col
              xl="6"
              lg="6"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refDireccion"
                v-model="direccion"
                placeholder="Dirección"
                @keypress="proc_come_conf_insc_bind_dire_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Referencia
            </b-col>
            <b-col
              xl="6"
              lg="6"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                ref="refReferencia"
                v-model="referencia"
                placeholder="Referencia"
                @keypress="proc_come_conf_insc_bind_refe_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Campaña
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="campana"
                placeholder="Campaña"
                @keyup.enter="proc_come_conf_insc_codi_camp()"
                @keydown.tab="proc_come_conf_insc_codi_camp()"
                @keypress="proc_come_conf_insc_bind_codi_camp($event)"
              />
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Zona
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="zona"
                placeholder="Zona"
                @keypress="proc_come_conf_insc_bind_codi_zona($event)"
              />
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Sector
            </b-col>
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="sector"
                placeholder="Sector"
                @keyup.enter="proc_come_conf_insc_codi_sect()"
                @keydown.tab="proc_come_conf_insc_codi_sect()"
                @keypress="proc_come_conf_insc_bind_codi_sect($event)"
              />
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="Referencia">
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Fecha Nacimiento
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-datepicker
                v-model="fechaNacimiento"
                selected-variant="primary"
                :hide-header="true"
                placeholder=""
                autocomplete="off"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Referido por
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="nroDocumentoReferencia"
                placeholder="Nro Documento"
                @keyup.enter="proc_come_conf_insc_nume_iden()"
                @keydown.tab="proc_come_conf_insc_nume_iden()"
                @keypress="proc_come_conf_insc_bind_nume_docu($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            />
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="nombreReferencia"
                placeholder="Nombre(s) y Apellidos(s)"
                disabled
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Teléfono Fijo
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="telefonoFijo"
                placeholder="Teléfono Fijo"
                @keypress="proc_come_conf_insc_bind_tele_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Teléfono Celular
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="telefonoCelular"
                placeholder="Teléfono Celular"
                @keypress="proc_come_conf_insc_bind_tele_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Correo Electrónico
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="correoElectronico"
                placeholder="Correo Electrónico"
                @keypress="proc_come_conf_insc_bind_corr_terc($event)"
              />
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="Imágenes">
          <b-row class="ml-0 mr-0">
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcSolicitudFrontal"
                  alt="Solicitud Frontal"
                  fluid-grow
                  @error="proc_come_conf_insc_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Solicitud Frontal
                </h4>
                <span
                  class="text-grey"
                >
                  Foto de la solicitud frontal.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputSolicitudFrontal"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('1')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputSolicitudFrontal.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_conf_insc_foto('1', srcSolicitudFrontal)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcSolicitudAdversa"
                  alt="Solicitud Adversa 1"
                  fluid-grow
                  @error="proc_come_conf_insc_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Solicitud Adversa 1
                </h4>
                <span
                  class="text-grey"
                >
                  Foto de la solicitud adversa 1.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputSolicitudAdversa"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('2')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputSolicitudAdversa.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span
                      class="text-black"
                    >
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_conf_insc_foto('2', srcSolicitudAdversa)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcSolicitudAdversa2"
                  alt="Solicitud Adversa 2"
                  fluid-grow
                  @error="proc_come_conf_insc_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Solicitud Adversa 2
                </h4>
                <span
                  class="text-grey"
                >
                  Foto de la solicitud adversa 2.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputSolicitudAdversa2"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('3')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputSolicitudAdversa2.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span
                      class="text-black"
                    >
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_conf_insc_foto('3', srcSolicitudAdversa2)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcDniFrontal"
                  alt="Dni Frontal"
                  fluid-grow
                  @error="proc_come_conf_insc_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Dni Frontal
                </h4>
                <span
                  class="text-grey"
                >
                  Foto del dni frontal.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputDniFrontal"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('4')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputDniFrontal.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_conf_insc_foto('4', srcDniFrontal)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcDniAdverso"
                  alt="Dni Adverso"
                  fluid-grow
                  @error="proc_come_conf_insc_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Dni Adverso
                </h4>
                <span
                  class="text-grey"
                >
                  Foto del dni adverso.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputDniAdverso"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('5')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputDniAdverso.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_conf_insc_foto('5', srcDniAdverso)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcReciboServicio"
                  alt="Recibo de Servicio"
                  fluid-grow
                  @error="proc_come_conf_insc_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Recibo de Servicio
                </h4>
                <span
                  class="text-grey"
                >
                  Foto del recibo de servicio.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputReciboServicio"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('6')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputReciboServicio.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_conf_insc_foto('6', srcReciboServicio)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcCentralRiesgo"
                  alt="Central de Riesgo"
                  fluid-grow
                  @error="proc_come_conf_insc_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Central de Riesgo
                </h4>
                <span
                  class="text-grey"
                >
                  Foto de la central de riesgo.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputCentralRiesgo"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('7')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputCentralRiesgo.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_conf_insc_foto('7', srcCentralRiesgo)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
            <b-col
              xl="3"
              lg="3"
              md="4"
              sm="6"
              xs="12"
            >
              <b-card
                class="text-center"
              >
                <b-img
                  :src="srcFachadaCasa"
                  alt="Otros"
                  fluid-grow
                  @error="proc_come_conf_insc_foto_erro($event)"
                />
                <h4
                  class="mb-1 mt-1"
                >
                  Otros
                </h4>
                <span
                  class="text-grey"
                >
                  Foto otros.
                </span>
                <div
                  class="mt-1 d-flex align-items-center justify-content-center"
                >
                  <input
                    ref="uploadInputFachadaCasa"
                    type="file"
                    class="hidden"
                    accept=".jpg"
                    @change="handleFileUpload('8')"
                  >
                  <b-button
                    variant="primary"
                    class="ml-1"
                    @click="$refs.uploadInputFachadaCasa.click()"
                  >
                    <feather-icon
                      icon="UploadIcon"
                      class="mr-50 text-black"
                    />
                    <span class="text-black">
                      Subir
                    </span>
                  </b-button>
                  <b-button
                    variant="dark"
                    class="ml-1"
                    @click="proc_come_conf_insc_foto('8', srcFachadaCasa)"
                  >
                    <feather-icon
                      icon="SearchIcon"
                      class="mr-50"
                    />
                    <span class="">
                      Ver
                    </span>
                  </b-button>
                </div>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="Referencia Personal">
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Tipo Parentesco
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <v-select
                ref="refTipoParentesco"
                v-model="seleccionTipoParentesco"
                :options="dataTipoParentesco"
                class="w-100 dropdown-150"
                placeholder="Seleccionar Tipo Parentesco"
              >
                <span
                  slot="no-options"
                  @click="$refs.refTipoParentesco.open = false"
                >
                  Tipo parentesco no existe.
                </span>
              </v-select>
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Nro Documento
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="nroDocumentoParentesco"
                placeholder="Nro Documento"
                @keypress="proc_come_conf_insc_bind_nume_docu($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Nombre(s)
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="nombreParentesco"
                placeholder="Nombre(s)"
                @keypress="proc_come_conf_insc_bind_nomb_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Apellido(s)
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="apellidoParentesco"
                placeholder="Apellido(s)"
                @keypress="proc_come_conf_insc_bind_apel_terc($event)"
              />
            </b-col>
          </b-row>
          <b-row class="ml-0 mr-0">
            <b-col
              xl="2"
              lg="2"
              md="3"
              sm="12"
              class="mb-1 align-self-center"
            >
              Teléfono Celular
            </b-col>
            <b-col
              xl="4"
              lg="5"
              md="6"
              sm="12"
              class="mb-1"
            >
              <b-form-input
                v-model="telefonoParentesco"
                placeholder="Teléfono Celular"
                @keypress="proc_come_conf_insc_bind_tele_terc($event)"
              />
            </b-col>
          </b-row>
        </b-tab>
      </b-tabs>
      <vs-popup
        :title="popupTituloDetalle"
        :active.sync="popupActiveDetalle"
        class-content="scrollbar"
        :background-color-popup="clasePopUp"
      >
        <b-row>
          <b-col>
            <b-card
              :img-src="popupFotoDetalle"
              :img-alt="popupAltDetalle"
              img-top
              tag="article"
              class="mb-0 text-center"
            />
          </b-col>
        </b-row>
      </vs-popup>
    </vs-popup>
  </section>
</template>
<script>
import {
  BRow,
  BCol,
  BButton,
  BCard,
  BTabs,
  BTab,
  BFormInput,
  BFormRadio,
  BFormRadioGroup,
  BFormDatepicker,
  BImg,
} from 'bootstrap-vue'
import selectCampanaZona from '@/views/components/FiltroCampanaZona.vue'
import { $themeColors } from '@themeConfig'
import vSelect from 'vue-select'
import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
import store from '@/store'

export default {
  components: {
    BRow,
    BCol,
    BButton,
    BCard,
    BFormInput,
    // eslint-disable-next-line vue/no-unused-components
    JqxGrid,
    BTabs,
    BTab,
    selectCampanaZona,
    vSelect,
    BFormRadio,
    BFormRadioGroup,
    BFormDatepicker,
    BImg,
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      localization: store.state.app.localizationobj,
      file: null,
      dataCampana: [],
      seleccionCampana: [],
      dataZona: [],
      seleccionZona: [],
      // eslint-disable-next-line
      dataAdapterGlobal: new jqx.dataAdapter(this.sourceGlobal),
      popupActive: false,
      popupActiveDetalle: false,
      popupTituloDetalle: '',
      popupFotoDetalle: '',
      popupAltDetalle: '',
      activeTab: 4,
      dataTipoDocumento: ['Carnet Extranjeria', 'Dni', 'Ruc'],
      seleccionTipoDocumento: [],
      nroDocumentoAntiguo: '',
      nroDocumento: '',
      nombre: '',
      apellido: '',
      sexo: '',
      seleccionDepartamento: null,
      dataDepartamento: [],
      seleccionProvincia: null,
      dataProvincia: [],
      seleccionDistrito: null,
      dataDistrito: [],
      seleccionTipoVia: [],
      dataTipoVia: [
        'Asentamiento Humano',
        'Asociación',
        'Avenida',
        'Calle',
        'Carretera',
        'Caserio',
        'Jiron',
        'Kilometro',
        'Manzana',
        'Pasaje',
        'Prolongación',
        'Pueblo Joven',
        'Sector',
        'Urbanización',
        'Otro',
      ],
      direccion: '',
      referencia: '',
      campana: '',
      zona: '',
      sector: '',
      fechaNacimiento: '',
      nroDocumentoReferencia: '',
      nombreReferencia: '',
      telefonoFijo: '',
      telefonoCelular: '',
      correoElectronico: '',
      srcSolicitudFrontal: '',
      srcSolicitudAdversa: '',
      srcSolicitudAdversa2: '',
      srcDniFrontal: '',
      srcDniAdverso: '',
      srcReciboServicio: '',
      srcCentralRiesgo: '',
      srcFachadaCasa: '',
      dataTipoParentesco: [],
      seleccionTipoParentesco: null,
      nroDocumentoParentesco: '',
      nombreParentesco: '',
      apellidoParentesco: '',
      telefonoParentesco: '',
      tabIndex: 0,
    }
  },
  computed: {
    clasePopUp() {
      if (store.state.appConfig.layout.skin === 'dark') {
        return '#283046'
      }
      return ''
    },
  },
  beforeCreate() {
    if (window.innerHeight - 200 < 400) {
      this.height = '400px'
    } else {
      this.height = `${window.innerHeight - 200}px`
    }
    this.sourceGlobal = {
      localdata: [],
      datafields: [
        { name: 'acti_hora', type: 'string' },
        { name: 'tipo_docu', type: 'string' },
        { name: 'nume_docu', type: 'string' },
        { name: 'nomb_terc', type: 'string' },
        { name: 'apel_terc', type: 'string' },
        { name: 'codi_zona', type: 'string' },
        { name: 'codi_sect', type: 'string' },
        { name: 'nomb_ciud', type: 'string' },
        { name: 'nomb_barr', type: 'string' },
        { name: 'tipo_viaa', type: 'string' },
        { name: 'dire_terc', type: 'string' },
        { name: 'cons_dpto', type: 'string' },
        { name: 'cons_ciud', type: 'string' },
        { name: 'cons_barr', type: 'string' },
        { name: 'tipo_gene', type: 'string' },
        { name: 'fech_naci', type: 'string' },
        { name: 'tele_terc', type: 'string' },
        { name: 'celu_terc', type: 'string' },
        { name: 'corr_ases', type: 'string' },
        { name: 'dire_refe', type: 'string' },
        { name: 'imag_cent', type: 'string' },
        { name: 'imag_rucc', type: 'string' },
        { name: 'imag_fron', type: 'string' },
        { name: 'imag_back', type: 'string' },
        { name: 'imag_back2', type: 'string' },
        { name: 'imag_paga', type: 'string' },
        { name: 'imag_paga_back', type: 'string' },
        { name: 'imag_term', type: 'string' },
        { name: 'cedu_refe', type: 'string' },
        { name: 'nomb_refe', type: 'string' },
        { name: 'nomb_pare', type: 'string' },
        { name: 'apel_pare', type: 'string' },
        { name: 'nume_pare', type: 'string' },
        { name: 'tele_pare', type: 'string' },
        { name: 'codi_pare', type: 'string' },
        { name: 'codi_camp', type: 'string' },
      ],
      datatype: 'array',
    }
  },
  beforeRouteLeave(to, from, next) {
    localStorage.removeItem('mainSami')
    next()
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.proc_come_conf_insc_visi()
  },
  created() {
    this.handleWindowResize()
    const userData = JSON.parse(localStorage.getItem('userData'))
    let itemCampana = JSON.parse(localStorage.getItem('mainCampana'))
    const itemZona = JSON.parse(userData.zona)
    itemCampana = itemCampana.camp_sigu.slice(1, 7)
    itemCampana.forEach(element => this.dataCampana.push(element.codi_camp))
    itemZona.forEach(element => this.dataZona.push(element.codi_zona))
    this.seleccionCampana = itemCampana[0].codi_camp
    this.proc_come_conf_insc_dpto()
    this.proc_come_conf_insc_tipo_pare()
  },
  methods: {
    setCampana(value) {
      this.seleccionCampana = value
    },
    setZona(value) {
      this.seleccionZona = value
    },
    handleWindowResize() {
      let codiCampGlob = ''
      let actiHoraGlob = ''
      let tipoDocuGlob = ''
      let numeDocuGlob = ''
      let nombTercGlob = ''
      let apelTercGlob = ''
      let codiZonaGlob = ''
      let codiSectGlob = ''
      let nombCiudGlob = ''
      let nombBarrGlob = ''
      let direTercGlob = ''
      switch (store.getters['app/currentBreakPoint']) {
        case 'xs':
          codiCampGlob = '20'
          actiHoraGlob = '20'
          tipoDocuGlob = '20'
          numeDocuGlob = '20'
          nombTercGlob = '30'
          apelTercGlob = '30'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          nombCiudGlob = '20'
          nombBarrGlob = '30'
          direTercGlob = '50'
          break
        case 'sm':
          codiCampGlob = '20'
          actiHoraGlob = '20'
          tipoDocuGlob = '20'
          numeDocuGlob = '20'
          nombTercGlob = '30'
          apelTercGlob = '30'
          codiZonaGlob = '20'
          codiSectGlob = '20'
          nombCiudGlob = '20'
          nombBarrGlob = '30'
          direTercGlob = '50'
          break
        case 'md':
          codiCampGlob = '15'
          actiHoraGlob = '15'
          tipoDocuGlob = '15'
          numeDocuGlob = '15'
          nombTercGlob = '25'
          apelTercGlob = '25'
          codiZonaGlob = '15'
          codiSectGlob = '15'
          nombCiudGlob = '15'
          nombBarrGlob = '25'
          direTercGlob = '40'
          break
        default:
          codiCampGlob = '8'
          actiHoraGlob = '8'
          tipoDocuGlob = '8'
          numeDocuGlob = '10'
          nombTercGlob = '20'
          apelTercGlob = '20'
          codiZonaGlob = '7'
          codiSectGlob = '7'
          nombCiudGlob = '10'
          nombBarrGlob = '15'
          direTercGlob = '25'
          break
      }
      this.columnsGlobal = [
        {
          text: 'Campaña',
          dataField: 'codi_camp',
          width: `${codiCampGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Fecha',
          dataField: 'acti_hora',
          width: `${actiHoraGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Tipo Docu.',
          dataField: 'tipo_docu',
          width: `${tipoDocuGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Nro Docu.',
          dataField: 'nume_docu',
          width: `${numeDocuGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Nombre(s)',
          dataField: 'nomb_terc',
          width: `${nombTercGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Apellido(s)',
          dataField: 'apel_terc',
          width: `${apelTercGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Zona',
          dataField: 'codi_zona',
          width: `${codiZonaGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Sector',
          dataField: 'codi_sect',
          width: `${codiSectGlob}%`,
          cellsalign: 'center',
          align: 'center',
        },
        {
          text: 'Provincia',
          dataField: 'nomb_ciud',
          width: `${nombCiudGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Distrito',
          dataField: 'nomb_barr',
          width: `${nombBarrGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'Dirección',
          dataField: 'dire_terc',
          width: `${direTercGlob}%`,
          cellsalign: 'left',
          align: 'center',
        },
        {
          text: 'tipo viaa',
          dataField: 'tipo_viaa',
          hidden: true,
        },
        {
          text: 'cons dpto',
          dataField: 'cons_dpto',
          hidden: true,
        },
        {
          text: 'cons ciud',
          dataField: 'cons_ciud',
          hidden: true,
        },
        {
          text: 'cons barr',
          dataField: 'cons_barr',
          hidden: true,
        },
        {
          text: 'tipo gene',
          dataField: 'tipo_gene',
          hidden: true,
        },
        {
          text: 'fech naci',
          dataField: 'fech_naci',
          hidden: true,
        },
        {
          text: 'tele terc',
          dataField: 'tele_terc',
          hidden: true,
        },
        {
          text: 'celu terc',
          dataField: 'celu_terc',
          hidden: true,
        },
        {
          text: 'corr ases',
          dataField: 'corr_ases',
          hidden: true,
        },
        {
          text: 'dire refe',
          dataField: 'dire_refe',
          hidden: true,
        },
        {
          text: 'imag cent',
          dataField: 'imag_cent',
          hidden: true,
        },
        {
          text: 'imag rucc',
          dataField: 'imag_rucc',
          hidden: true,
        },
        {
          text: 'imag fron',
          dataField: 'imag_fron',
          hidden: true,
        },
        {
          text: 'imag back',
          dataField: 'imag_back',
          hidden: true,
        },
        {
          text: 'imag back2',
          dataField: 'imag_back2',
          hidden: true,
        },
        {
          text: 'imag paga',
          dataField: 'imag_paga',
          hidden: true,
        },
        {
          text: 'imag paga back',
          dataField: 'imag_paga_back',
          hidden: true,
        },
        {
          text: 'imag term',
          dataField: 'imag_term',
          hidden: true,
        },
        {
          text: 'cedu refe',
          dataField: 'cedu_refe',
          hidden: true,
        },
        {
          text: 'nomb refe',
          dataField: 'nomb_refe',
          hidden: true,
        },
        {
          text: 'nomb pare',
          dataField: 'nomb_pare',
          hidden: true,
        },
        {
          text: 'apel pare',
          dataField: 'apel_pare',
          hidden: true,
        },
        {
          text: 'nume pare',
          dataField: 'nume_pare',
          hidden: true,
        },
        {
          text: 'tele pare',
          dataField: 'tele_pare',
          hidden: true,
        },
        {
          text: 'codi pare',
          dataField: 'codi_pare',
          hidden: true,
        },
      ]
      if (typeof this.$refs.proc_come_conf_insc_grid_glob !== 'undefined') {
        if (window.innerHeight - 200 < 400) {
          this.height = '400px'
        } else {
          this.height = `${window.innerHeight - 200}px`
        }
        this.$refs.proc_come_conf_insc_grid_glob.columns = this.columnsGlobal
        this.$refs.proc_come_conf_insc_grid_glob.height = this.height
      }
    },
    async handleFileUpload(codiFile) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      switch (codiFile) {
        case '1':
          // eslint-disable-next-line
          this.file = this.$refs.uploadInputSolicitudFrontal.files[0]
          break
        case '2':
          // eslint-disable-next-line
          this.file = this.$refs.uploadInputSolicitudAdversa.files[0]
          break
        case '3':
          // eslint-disable-next-line
          this.file = this.$refs.uploadInputSolicitudAdversa2.files[0]
          break
        case '4':
          // eslint-disable-next-line
          this.file = this.$refs.uploadInputDniFrontal.files[0]
          break
        case '5':
          // eslint-disable-next-line
          this.file = this.$refs.uploadInputDniAdverso.files[0]
          break
        case '6':
          // eslint-disable-next-line
          this.file = this.$refs.uploadInputReciboServicio.files[0]
          break
        case '7':
          // eslint-disable-next-line
          this.file = this.$refs.uploadInputCentralRiesgo.files[0]
          break
        case '8':
          // eslint-disable-next-line
          this.file = this.$refs.uploadInputFachadaCasa.files[0]
          break
        default:
      }

      const data = new FormData()
      data.append('fileToUpload', this.file)
      data.append('codi_usua', this.$session.get('codigoUsuario'))
      data.append('nume_iden', this.nroDocumento)
      data.append('codi_imag', codiFile)
      data.append('codi_acce', this.userData.codigoAcceso)
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_arch`,
          timeout: `${1000 * store.state.app.timeout}`,
          data,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        switch (codiFile) {
          case '1':
            this.file = null
            this.$refs.uploadInputSolicitudFrontal.value = null
            break
          case '2':
            this.file = null
            this.$refs.uploadInputSolicitudAdversa.value = null
            break
          case '3':
            this.file = null
            this.$refs.uploadInputSolicitudAdversa2.value = null
            break
          case '4':
            this.file = null
            this.$refs.uploadInputDniFrontal.value = null
            break
          case '5':
            this.file = null
            this.$refs.uploadInputDniAdverso.value = null
            break
          case '6':
            this.file = null
            this.$refs.uploadInputReciboServicio.value = null
            break
          case '7':
            this.file = null
            this.$refs.uploadInputCentralRiesgo.value = null
            break
          case '8':
            this.file = null
            this.$refs.uploadInputFachadaCasa.value = null
            break
          default:
        }
        const foto = await servicio.data.data_glob
        switch (codiFile) {
          case '1':
            this.srcSolicitudFrontal = foto
            break
          case '2':
            this.srcSolicitudAdversa = foto
            break
          case '3':
            this.srcSolicitudAdversa2 = foto
            break
          case '4':
            this.srcDniFrontal = foto
            break
          case '5':
            this.srcDniAdverso = foto
            break
          case '6':
            this.srcReciboServicio = foto
            break
          case '7':
            this.srcCentralRiesgo = foto
            break
          case '8':
            this.srcFachadaCasa = foto
            break
          default:
        }
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'CheckCircleIcon',
              variant: 'success',
              text: 'Imagen cargada con éxito.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        let mensajeError = ''
        if (error.response) {
          if (error.response.status === 500) {
            mensajeError = error.response.statusText
          } else if (error.response.status === 404) {
            mensajeError = error.response.data.message
          } else if (error.response.status === 401) {
            mensajeError = error.response.data.message
          }
        } else if (error.request) {
          // console.log(error.request)
          mensajeError = error.request
        } else if (error.message === 'Network Error') {
          mensajeError = 'Error de conexión con el servidor.'
        } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
          mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
        }
        mensajeError = mensajeError.toLowerCase()
        mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: mensajeError,
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        if (error.response) {
          if (error.response.status === 401) {
            this.$router.push({ name: 'login' }).catch(() => {})
          }
        }
      }
    },
    proc_come_conf_insc_bind_nume_docu(event) {
      const regex = new RegExp('^[a-zA-Z0-9]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_nomb_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_apel_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_dire_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_refe_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9 ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_codi_camp(event) {
      const regex = new RegExp('^[0-9]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_codi_zona(event) {
      const regex = new RegExp('^[a-zA-Z0-9]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_codi_sect(event) {
      const regex = new RegExp('^[a-zA-Z0-9]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_tele_terc(event) {
      const regex = new RegExp('^[0-9]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_bind_corr_terc(event) {
      const regex = new RegExp('^[a-zA-Z0-9_@. ]+$')
      const key = String.fromCharCode(
        !event.charCode ? event.which : event.charCode,
      )
      if (!regex.test(key)) {
        event.preventDefault()
        return false
      }
      return true
    },
    proc_come_conf_insc_limp() {
      this.$refs.proc_come_conf_insc_grid_glob.clear()
      this.$refs.proc_come_conf_insc_grid_glob.clearselection()
    },
    proc_come_conf_insc_foto_erro(event) {
      // eslint-disable-next-line
      event.target.src = require('@/assets/images/portrait/small/sin_imagen.png')
    },
    async proc_come_conf_insc_visi() {
      try {
        await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/dato/prog_visi`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            codi_prog: 'proc_come_conf_insc',
          },
        })
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        let mensajeError = ''
        if (error.response) {
          if (error.response.status === 500) {
            mensajeError = error.response.statusText
          } else if (error.response.status === 404) {
            mensajeError = error.response.data.message
          } else if (error.response.status === 401) {
            mensajeError = error.response.data.message
          }
        } else if (error.request) {
          // console.log(error.request)
          mensajeError = error.request
        } else if (error.message === 'Network Error') {
          mensajeError = 'Error de conexión con el servidor.'
        } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
          mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
        }
        mensajeError = mensajeError.toLowerCase()
        mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: mensajeError,
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        if (error.response) {
          if (error.response.status === 401) {
            this.$router.push({ name: 'login' }).catch(() => {})
          }
        }
      }
    },
    async proc_come_conf_insc_gene() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      this.proc_come_conf_insc_limp()
      if (
        this.seleccionCampana === null
        || this.seleccionCampana.length === 0
      ) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Campo campaña es obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (
        this.seleccionZona === null
        || this.seleccionZona.length === 0
      ) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Campo zona es obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_gene`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.seleccionCampana,
              codi_zona: this.seleccionZona,
            },
          })
          this.sourceGlobal.localdata = await servicio.data.data_glob
          this.sourceGlobal.datatype = 'json'
          this.$refs.proc_come_conf_insc_grid_glob.updatebounddata('cells')
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            // console.log(error.request)
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
    },
    async proc_come_conf_insc_exce() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const dataInfoGlob = this.$refs.proc_come_conf_insc_grid_glob.getdatainformation()
      const dataRowsGlob = dataInfoGlob.rowscount
      if (dataRowsGlob === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'No tiene información para exportar a excel',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_exce`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              data_glob: this.$refs.proc_come_conf_insc_grid_glob.exportdata(
                'json',
                null,
                true,
                null,
                true,
              ),
            },
          })
          const datoHtml = await servicio.data.html
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          window.open(`${store.state.app.webTemporal}${datoHtml}`, '_blank')
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            // console.log(error.request)
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
    },
    async proc_come_conf_insc_nume_iden() {
      if (this.nroDocumentoReferencia.trim() === '') {
        this.nombreReferencia = ''
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_nume_iden`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: this.nroDocumentoReferencia.trim(),
            },
          })
          this.nombreReferencia = await servicio.data.data_glob.nomb_refe
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            // console.log(error.request)
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
    },
    async proc_come_conf_insc_codi_sect() {
      if (this.sector.trim() === '') {
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Error campo sector obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })
        try {
          await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_codi_sect`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_zona: this.zona.trim(),
              codi_sect: this.sector.trim(),
            },
          })
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: 'Sector correcto.',
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            // console.log(error.request)
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
    },
    async proc_come_conf_insc_codi_camp() {
      if (this.campana.trim() === '') {
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Error campo campaña obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        this.$vs.loading({
          color: $themeColors.primary,
        })
        try {
          await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_codi_camp`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              codi_camp: this.campana.trim(),
            },
          })
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: 'Campaña correcta.',
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            // console.log(error.request)
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
    },
    proc_come_conf_insc_grid_glob_sele(event) {
      const { args } = event
      const row = args.rowindex
      this.activeTab = 0
      const dataRecord = this.$refs.proc_come_conf_insc_grid_glob.getrowdata(row)
      switch (dataRecord.tipo_docu) {
        case 'C':
          this.seleccionTipoDocumento = 'Carnet Extranjeria'
          break
        case 'E':
          this.seleccionTipoDocumento = 'Carnet Extranjeria'
          break
        case 'D':
          this.seleccionTipoDocumento = 'Dni'
          break
        case 'R':
          this.seleccionTipoDocumento = 'Ruc'
          break
        default:
      }
      this.nroDocumentoAntiguo = dataRecord.nume_docu
      this.nroDocumento = dataRecord.nume_docu
      this.nombre = dataRecord.nomb_terc
      this.apellido = dataRecord.apel_terc
      this.sexo = dataRecord.tipo_gene
      this.seleccionTipoVia = dataRecord.tipo_viaa

      let indexConsDpto = -1
      this.dataDepartamento.forEach((obj, index) => {
        if (obj.value === dataRecord.cons_dpto) {
          indexConsDpto = index
        }
      })
      if (indexConsDpto !== -1) {
        this.seleccionDepartamento = {
          label: this.dataDepartamento[indexConsDpto].label,
          value: this.dataDepartamento[indexConsDpto].value,
        }

        this.proc_come_conf_insc_prov(
          dataRecord.cons_ciud,
          dataRecord.cons_barr,
        )
      }

      this.direccion = dataRecord.dire_terc
      this.referencia = dataRecord.dire_refe
      this.campana = dataRecord.codi_camp
      this.zona = dataRecord.codi_zona
      this.sector = dataRecord.codi_sect

      const fechNaci = dataRecord.fech_naci.split('/')
      // eslint-disable-next-line
      const anioNaci = parseInt(fechNaci[2])
      // eslint-disable-next-line
      const messNaci = parseInt(fechNaci[1]) - 1
      // eslint-disable-next-line
      const diaaNaci = parseInt(fechNaci[0])
      this.fechaNacimiento = new Date(anioNaci, messNaci, diaaNaci)
      this.nroDocumentoReferencia = dataRecord.cedu_refe
      this.nombreReferencia = dataRecord.nomb_refe
      this.telefonoFijo = dataRecord.tele_terc
      this.telefonoCelular = dataRecord.celu_terc
      this.correoElectronico = dataRecord.corr_ases

      this.srcSolicitudFrontal = dataRecord.imag_fron
      this.srcSolicitudAdversa = dataRecord.imag_back
      this.srcSolicitudAdversa2 = dataRecord.imag_back2
      this.srcDniFrontal = dataRecord.imag_paga
      this.srcDniAdverso = dataRecord.imag_paga_back
      this.srcReciboServicio = dataRecord.imag_term
      this.srcCentralRiesgo = dataRecord.imag_cent
      this.srcFachadaCasa = dataRecord.imag_rucc
      this.tabIndex = 0
      let indexTipoPare = -1
      this.dataTipoParentesco.forEach((obj, index) => {
        if (obj.value === dataRecord.codi_pare) {
          indexTipoPare = index
        }
      })

      if (indexTipoPare !== -1) {
        this.seleccionTipoParentesco = {
          label: this.dataTipoParentesco[indexTipoPare].label,
          value: this.dataTipoParentesco[indexTipoPare].value,
        }
      }

      this.nroDocumentoParentesco = dataRecord.nume_pare
      this.nombreParentesco = dataRecord.nomb_pare
      this.apellidoParentesco = dataRecord.apel_pare
      this.telefonoParentesco = dataRecord.tele_pare
      document.body.style.overflow = 'hidden'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '12'
      this.popupActive = true
    },
    proc_come_conf_insc_foto(codiFoto, direFoto) {
      switch (codiFoto) {
        case '1':
          this.popupTituloDetalle = 'Solicitud Frontal'
          this.popupAltDetalle = 'Solicitud Frontal'
          break
        case '2':
          this.popupTituloDetalle = 'Solicitud Adversa'
          this.popupAltDetalle = 'Solicitud Adversa'
          break
        case '3':
          this.popupTituloDetalle = 'Solicitud Adversa 2'
          this.popupAltDetalle = 'Solicitud Adversa 2'
          break
        case '4':
          this.popupTituloDetalle = 'Dni Frontal'
          this.popupAltDetalle = 'Dni Frontal'
          break
        case '5':
          this.popupTituloDetalle = 'Dni Adverso'
          this.popupAltDetalle = 'Dni Adverso'
          break
        case '6':
          this.popupTituloDetalle = 'Recibo de Servicio'
          this.popupAltDetalle = 'Recibo de Servicio'
          break
        case '7':
          this.popupTituloDetalle = 'Central de Riesgo'
          this.popupAltDetalle = 'Central de Riesgo'
          break
        case '8':
          this.popupTituloDetalle = 'Otros'
          this.popupAltDetalle = 'Otros'
          break
        default:
      }
      this.popupFotoDetalle = direFoto
      this.popupActiveDetalle = true
    },
    async proc_come_conf_insc_dpto() {
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_dpto`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataDepartamento.push({
          label: element.nomb_dpto,
          value: element.cons_dpto,
        }))
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        let mensajeError = ''
        if (error.response) {
          if (error.response.status === 500) {
            mensajeError = error.response.statusText
          } else if (error.response.status === 404) {
            mensajeError = error.response.data.message
          } else if (error.response.status === 401) {
            mensajeError = error.response.data.message
          }
        } else if (error.request) {
          // console.log(error.request)
          mensajeError = error.request
        } else if (error.message === 'Network Error') {
          mensajeError = 'Error de conexión con el servidor.'
        } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
          mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
        }
        mensajeError = mensajeError.toLowerCase()
        mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: mensajeError,
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        if (error.response) {
          if (error.response.status === 401) {
            this.$router.push({ name: 'login' }).catch(() => {})
          }
        }
      }
    },
    async proc_come_conf_insc_tipo_pare() {
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_tipo_pare`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataTipoParentesco.push({
          label: element.nomb_pare,
          value: element.codi_pare,
        }))
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        let mensajeError = ''
        if (error.response) {
          if (error.response.status === 500) {
            mensajeError = error.response.statusText
          } else if (error.response.status === 404) {
            mensajeError = error.response.data.message
          } else if (error.response.status === 401) {
            mensajeError = error.response.data.message
          }
        } else if (error.request) {
          // console.log(error.request)
          mensajeError = error.request
        } else if (error.message === 'Network Error') {
          mensajeError = 'Error de conexión con el servidor.'
        } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
          mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
        }
        mensajeError = mensajeError.toLowerCase()
        mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: mensajeError,
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        if (error.response) {
          if (error.response.status === 401) {
            this.$router.push({ name: 'login' }).catch(() => {})
          }
        }
      }
    },
    async proc_come_conf_insc_prov(consCiud, consBarr) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const consDpto = this.seleccionDepartamento.value
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_ciud`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_dpto: consDpto,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataProvincia.push({
          label: element.nomb_ciud,
          value: element.cons_ciud,
        }))
        if (consCiud !== '') {
          let indexConsProv = -1
          this.dataProvincia.forEach((obj, index) => {
            if (obj.value === consCiud) {
              indexConsProv = index
            }
          })
          if (indexConsProv !== -1) {
            this.seleccionProvincia = {
              label: this.dataProvincia[indexConsProv].label,
              value: this.dataProvincia[indexConsProv].value,
            }
            if (consBarr !== '') {
              this.proc_come_conf_insc_dist(consBarr)
            }
          }
        }
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        let mensajeError = ''
        if (error.response) {
          if (error.response.status === 500) {
            mensajeError = error.response.statusText
          } else if (error.response.status === 404) {
            mensajeError = error.response.data.message
          } else if (error.response.status === 401) {
            mensajeError = error.response.data.message
          }
        } else if (error.request) {
          // console.log(error.request)
          mensajeError = error.request
        } else if (error.message === 'Network Error') {
          mensajeError = 'Error de conexión con el servidor.'
        } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
          mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
        }
        mensajeError = mensajeError.toLowerCase()
        mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: mensajeError,
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        if (error.response) {
          if (error.response.status === 401) {
            this.$router.push({ name: 'login' }).catch(() => {})
          }
        }
      }
    },
    async proc_come_conf_insc_dist(consBarr) {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const consCiud = this.seleccionProvincia.value
      try {
        const servicio = await axios({
          method: 'post',
          url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_dist`,
          timeout: `${1000 * store.state.app.timeout}`,
          data: {
            codi_usua: this.$session.get('codigoUsuario'),
            codi_acce: this.userData.codigoAcceso,
            cons_ciud: consCiud,
          },
        })
        const dato = await servicio.data.data_glob
        dato.forEach(element => this.dataDistrito.push({
          label: element.nomb_barr,
          value: element.cons_barr,
        }))
        if (consBarr !== '') {
          let indexConsDist = -1
          this.dataDistrito.forEach((obj, index) => {
            if (obj.value === consBarr) {
              indexConsDist = index
            }
          })
          if (indexConsDist !== -1) {
            this.seleccionDistrito = {
              label: this.dataDistrito[indexConsDist].label,
              value: this.dataDistrito[indexConsDist].value,
            }
          }
        }
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
      } catch (error) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        let mensajeError = ''
        if (error.response) {
          if (error.response.status === 500) {
            mensajeError = error.response.statusText
          } else if (error.response.status === 404) {
            mensajeError = error.response.data.message
          } else if (error.response.status === 401) {
            mensajeError = error.response.data.message
          }
        } else if (error.request) {
          // console.log(error.request)
          mensajeError = error.request
        } else if (error.message === 'Network Error') {
          mensajeError = 'Error de conexión con el servidor.'
        } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
          mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
        }
        mensajeError = mensajeError.toLowerCase()
        mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: mensajeError,
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
        if (error.response) {
          if (error.response.status === 401) {
            this.$router.push({ name: 'login' }).catch(() => {})
          }
        }
      }
    },
    proc_come_conf_insc_inpu_dpto() {
      this.dataProvincia = []
      this.dataDistrito = []
      this.seleccionProvincia = null
      this.seleccionDistrito = null
      if (this.seleccionDepartamento !== null) {
        this.proc_come_conf_insc_prov('', '')
      }
    },
    proc_come_conf_insc_inpu_prov() {
      this.dataDistrito = []
      this.seleccionDistrito = null
      if (this.seleccionProvincia !== null) {
        this.proc_come_conf_insc_dist('')
      }
    },
    async proc_come_conf_insc_regi() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      if (
        this.seleccionDepartamento === null
        || this.seleccionDepartamento.length === 0
      ) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Campo departamento obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (
        this.seleccionProvincia === null
        || this.seleccionProvincia.length === 0
      ) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Campo provincia obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (
        this.seleccionDistrito === null
        || this.seleccionDistrito.length === 0
      ) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Campo distrito obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (
        this.seleccionTipoDocumento === null
        || this.seleccionTipoDocumento.length === 0
      ) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Campo tipo documento obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else if (
        this.seleccionTipoVia === null
        || this.seleccionTipoVia.length === 0
      ) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Campo tipo via obligatorio.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        let codiPare = ''
        if (
          this.seleccionTipoParentesco === null
          || this.seleccionTipoParentesco.length === 0
        ) {
          codiPare = ''
        } else {
          codiPare = this.seleccionTipoParentesco.value
        }
        let fechNaci = this.fechaNacimiento
        let anooNaci = ''
        let messNaci = ''
        let diaaNaci = ''
        if (fechNaci !== '') {
          fechNaci = new Date(fechNaci)
          anooNaci = fechNaci.getFullYear()
          messNaci = fechNaci.getMonth() + 1
          diaaNaci = fechNaci.getDate() + 1
          if (messNaci < 10) {
            messNaci = `0${messNaci}`
          }
          if (diaaNaci < 10) {
            diaaNaci = `0${diaaNaci}`
          }

          fechNaci = `${diaaNaci}/${messNaci}/${anooNaci}`
        }
        try {
          await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_regi`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden_anti: this.nroDocumentoAntiguo,
              tipo_docu: this.seleccionTipoDocumento,
              nume_iden: this.nroDocumento,
              nomb_terc: this.nombre,
              apel_terc: this.apellido,
              tipo_gene: this.sexo,
              nomb_dpto: this.seleccionDepartamento.value,
              nomb_prov: this.seleccionProvincia.value,
              nomb_dist: this.seleccionDistrito.value,
              dire_terc: this.direccion,
              dire_refe: this.referencia,
              codi_zona: this.zona,
              codi_sect: this.sector,
              cedu_refe: this.nroDocumentoReferencia,
              fech_naci: fechNaci,
              tele_fijo: this.telefonoFijo,
              tele_celu: this.telefonoCelular,
              corr_elec: this.correoElectronico,
              tipo_viaa: this.seleccionTipoVia,
              codi_pare: codiPare,
              nume_pare: this.nroDocumentoParentesco,
              nomb_pare: this.nombreParentesco,
              apel_pare: this.apellidoParentesco,
              tele_pare: this.telefonoParentesco,
              codi_camp: this.campana,
            },
          })
          document.body.style.overflow = 'visible'
          document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
          this.popupActive = false
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: 'Registro satisfactorio',
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          setTimeout(() => {
            this.$vs.loading.close()
            this.proc_come_conf_insc_gene()
          }, 500)
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            // console.log(error.request)
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
    },
    async proc_come_conf_insc_apro() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindexes = this.$refs.proc_come_conf_insc_grid_glob.getselectedrowindexes()
      if (rowindexes.length === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Debe de seleccionar preinscripción para aprobar.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        let dataNumeIden = ''
        let i = 0
        let dataRecord = null
        let numeIden = ''
        for (i = 0; i < rowindexes.length; i += 1) {
          dataRecord = this.$refs.proc_come_conf_insc_grid_glob.getrowdata(
            rowindexes[i],
          )
          numeIden = dataRecord.nume_docu
          dataNumeIden = `${dataNumeIden}'${numeIden}',`
        }
        dataNumeIden = dataNumeIden.slice(0, -1)
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_apro`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: dataNumeIden,
            },
          })
          let data = await servicio.data.data_glob
          data = data.toLowerCase()
          data = data.charAt(0).toUpperCase() + data.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: data,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          setTimeout(() => {
            this.$vs.loading.close()
            this.proc_come_conf_insc_gene()
          }, 500)
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            // console.log(error.request)
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
    },
    async proc_come_conf_insc_rech() {
      this.$vs.loading({
        color: $themeColors.primary,
      })
      const rowindexes = this.$refs.proc_come_conf_insc_grid_glob.getselectedrowindexes()
      if (rowindexes.length === 0) {
        setTimeout(() => {
          this.$vs.loading.close()
        }, 500)
        this.$toast(
          {
            component: ToastificationContent,
            props: {
              title: 'Notificación',
              icon: 'AlertTriangleIcon',
              variant: 'danger',
              text: 'Debe de seleccionar preinscripción para rechazar.',
            },
          },
          {
            position: 'bottom-right',
            timeout: 8000,
          },
        )
      } else {
        let dataNumeIden = ''
        let i = 0
        let dataRecord = null
        let numeIden = ''
        for (i = 0; i < rowindexes.length; i += 1) {
          dataRecord = this.$refs.proc_come_conf_insc_grid_glob.getrowdata(
            rowindexes[i],
          )
          numeIden = dataRecord.nume_docu
          dataNumeIden = `${dataNumeIden}'${numeIden}',`
        }
        dataNumeIden = dataNumeIden.slice(0, -1)
        try {
          const servicio = await axios({
            method: 'post',
            url: `${store.state.app.webService}/sami_v1/proc_come_conf_insc/conf_insc_rech`,
            timeout: `${1000 * store.state.app.timeout}`,
            data: {
              codi_usua: this.$session.get('codigoUsuario'),
              codi_acce: this.userData.codigoAcceso,
              nume_iden: dataNumeIden,
            },
          })
          let data = await servicio.data.data_glob
          data = data.toLowerCase()
          data = data.charAt(0).toUpperCase() + data.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'CheckCircleIcon',
                variant: 'success',
                text: data,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          setTimeout(() => {
            this.$vs.loading.close()
            this.proc_come_conf_insc_gene()
          }, 500)
        } catch (error) {
          setTimeout(() => {
            this.$vs.loading.close()
          }, 500)
          let mensajeError = ''
          if (error.response) {
            if (error.response.status === 500) {
              mensajeError = error.response.statusText
            } else if (error.response.status === 404) {
              mensajeError = error.response.data.message
            } else if (error.response.status === 401) {
              mensajeError = error.response.data.message
            }
          } else if (error.request) {
            // console.log(error.request)
            mensajeError = error.request
          } else if (error.message === 'Network Error') {
            mensajeError = 'Error de conexión con el servidor.'
          } else if (error.code === 'ECONNABORTED') {
          // eslint-disable-next-line
          const tiempo = `${parseInt(store.state.app.timeout / 60)}`
            mensajeError = `Se supero el tiempo de espara máximo (${tiempo} min.)`
          }
          mensajeError = mensajeError.toLowerCase()
          mensajeError = mensajeError.charAt(0).toUpperCase() + mensajeError.slice(1)
          this.$toast(
            {
              component: ToastificationContent,
              props: {
                title: 'Notificación',
                icon: 'AlertTriangleIcon',
                variant: 'danger',
                text: mensajeError,
              },
            },
            {
              position: 'bottom-right',
              timeout: 8000,
            },
          )
          if (error.response) {
            if (error.response.status === 401) {
              this.$router.push({ name: 'login' }).catch(() => {})
            }
          }
        }
      }
    },
    proc_come_conf_insc_cerr() {
      document.body.style.overflow = 'visible'
      document.getElementsByClassName('floating-nav')[0].style.zIndex = '620001'
    },
  },
}
</script>
