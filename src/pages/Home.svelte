<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import { getProvinsi, getKabKota } from "../Api/data"; 
    import Select from 'svelte-select';
    import { navigate } from "svelte-routing";
    import { resApi, dataApi } from "../store.js";

    let provinsiList, kotaList= []

    provinsiList = getProvinsi()
    let selectedProv = ""
    let selectedKota = ""
    let jenis = "covid"
    export let url = "";

    console.log('sss', $resApi)

    const handleSelectProv = async (event) => {
        const val = event.detail;
        let getKota = await getKabKota(val.value)
        console.log('jembut', getKota)
        kotaList = Object(getKota.response.data).map( (item) =>  {
            return { id: item.kode_kabkota, label: item.nama_kabkota }
        })
        return kotaList
    };

    const handleSelectKabKota = (event) => {
        const val = event.detail;
        selectedKota = val.id
        return
    }

    const handleClick = (event) => {
        // alert(jenis)
        // goto(`/search?q=${inputValue}`);
        dataApi.set({cok:133});
        navigate("/results", { replace: true });
    }

</script>

<div class="app-content content">
    <!-- BEGIN: Content-->
        <div class="content-overlay" />
        <div class="header-navbar-shadow" />
        <div class="content-wrapper">
            <div class="content-header row" />
            <div class="content-body">
                <div class="auth-wrapper auth-basic px-2">
                    <div class="auth-inner my-2">
                        <!-- Login basic -->
                        <div class="card mb-0">
                            <div class="card-body">
                                <a href="index-2.html" class="brand-logo">
                                    <img src="https://cdn-icons-png.flaticon.com/512/504/504015.png" width="110px">
                                </a>

                                <h4 class="card-title mb-1">
                                    Cari Ketersediaan tempat tidur
                                </h4>

                                <form
                                    class="auth-login-form mt-2"
                                    action="#"
                                    method="POST"
                                >
                                    <div class="mb-1">
                                        <label
                                            for="login-email"
                                            class="form-label">Pilih tempat tidur</label
                                        ><br>
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            value="covid"
                                            bind:group={jenis}
                                            checked="{jenis == 'covid'}"
                                        />&nbsp;Covid

                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="inlineRadioOptions"
                                            id="inlineRadio1"
                                            value="non-covid"
                                            bind:group={jenis}
                                            checked="{jenis == 'non-covid'}"
                                      />&nbsp;Non-Covid
                                    </div>

                                    <div class="mb-1">
                                      <label
                                          for="login-email"
                                          class="form-label">Pilih Provinsi</label
                                      ><br>
                                      <Select items={provinsiList} on:select={handleSelectProv} id="selectProv" name="provinsi"></Select>
                                    </div>

                                    <div class="mb-1">
                                      <label
                                          for="login-email"
                                          class="form-label">Pilih Kab Kota</label
                                      ><br>
                                      <Select items={kotaList} on:select={handleSelectKabKota} id="selectKabKota" name="kab_kota"></Select>
                                    </div>
                                    <button
                                        class="btn btn-primary w-100"
                                        on:click|preventDefault="{handleClick}"
                                        tabindex="4">Cari ...</button
                                    >
                                </form>
                            </div>
                        </div>
                        <!-- /Login basic -->
                    </div>
                </div>
            </div>
        </div>
    <!-- END: Content-->
</div>
