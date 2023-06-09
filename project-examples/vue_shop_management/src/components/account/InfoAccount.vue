<script setup>
import autoAnimate from "@formkit/auto-animate"
import { toast } from 'vue3-toastify';

const provinces = ref([])
const districts = ref([])
const wards = ref([])

const store = useUserStore()

const fullname = ref(store.user.fullname)
const phone = ref(store.user.phone)
const email = ref(store.user.email)
const address = ref(store.user.address)
const province = ref(store.user.province)
const district = ref(store.user.district)
const ward = ref(store.user.ward)

const example = ref()

onMounted(async () => {
    example.value.querySelectorAll(".formkit-outer").forEach(autoAnimate)
    
    provinces.value = await PCVNService.getProvinces()

    const provinceCode = provinces.value.find((item) => item.name === province.value).code
    districts.value = await PCVNService.getDistricts(provinceCode)
    
    const districtCode = districts.value.find((item) => item.name === district.value).code
    wards.value = await PCVNService.getWards(districtCode)
})

const submit = async () => {
    try {
        // filter fullname, phone, email, address, province, district, ward not change
        const data = {
            fullname: fullname.value == store.user.fullname ? null : fullname.value,
            phone: phone.value == store.user.phone ? null : phone.value,
            email: email.value == store.user.email ? null : email.value,
            address: address.value == store.user.address ? null : address.value,
            province: province.value == store.user.province ? null : province.value,
            district: district.value == store.user.district ? null : district.value,
            ward: ward.value == store.user.ward ? null : ward.value,
        }

        //? filter data not null
        const filterData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != null))
        if (Object.keys(filterData).length == 0) {
            toast.error("Bạn chưa thay đổi thông tin nào")
        } else {
            filterData.id = store.user.id
            const response = await UserService.updateUser(filterData)
            if (response) {
                toast.success("Cập nhật thông tin thành công")
                store.login(response.data)
            }
        }
    } catch (exception) {
        console.log(exception)
    }
}

watch(province,async (value) => {
    if(value){
        const provinceCode = provinces.value.find((item) => item.name === value).code
        if(provinceCode){
            districts.value = await PCVNService.getDistricts(provinceCode)
            wards.value = [] //! reset wards
        }
    }
})

watch(district, async (value) => {
    if(value){
        const districtCode = districts.value.find((item) => item.name === value).code
        if(districtCode){
            wards.value = await PCVNService.getWards(districtCode)
        }
    }
})

</script>

<template>
    <div class="tab-pane fade" id="account-info" role="tabpanel">
        <div class="myaccount-content">
            <h3 class="title"> Chi Tiết Tài Khoản</h3>
            <div class="account-details-form">
                <div class="example formkit-example" ref="example">
                    <FormKit type="form" :submit-attrs="{ inputClass: 'btn btn-primary btn-hover-dark rounded' }"
                        @submit="submit">
                        <div class="single-input-item m-b-15">
                            <div class="row">
                                <div class="col-lg-6">
                                    <FormKit v-model="fullname" type="text" label="Họ và Tên" suffix-icon="info"
                                        help="Hãy nhập họ và tên của bạn." name="fullname" validation="required|length:5,20"
                                        validation-visibility="dirty" :validation-messages="{
                                                matches: 'Họ và tên không được để trống',
                                            }" />
                                </div>
                                <div class="col-lg-6">
                                    <FormKit v-model="phone" type="tel" label="Số điện thoại" suffix-icon="telephone"
                                        help="Hãy nhập số điện thoại của bạn." name="phone"
                                        validation="required|matches:/^[0-9]{10}$/" validation-visibility="dirty"
                                        :validation-messages="{
                                                matches: 'Số điện thoại không hợp lệ',
                                            }" />
                                </div>
                            </div>
                        </div>

                        <div class="single-input-item m-b-15">
                            <div class="row">
                                <div class="col-lg-6">
                                    <FormKit v-model="email" type="email" label="Email" suffix-icon="email"
                                        help="Hãy nhập email của bạn." validation="required|email|ends_with:.com"
                                        validation-visibility="live" placeholder="kietdeptrai@gmai.com"
                                        :validation-messages="{
                                                required: 'Email không được để trống',
                                                email: 'Email không hợp lệ',
                                                ends_with: 'Email phải kết thúc bằng .com',
                                            }" />
                                </div>

                                <div class="col-lg-6">
                                    <FormKit v-model="address" type="text" label="Địa chỉ" suffix-icon="text"
                                        help="Hãy nhập địa chỉ của bạn." validation="required|length:5,20"
                                        validation-visibility="dirty" :validation-messages="{
                                                matches: 'Địa chỉ không được để trống',
                                            }" />
                                </div>
                            </div>
                        </div>

                        <div class="single-input-item m-b-15">
                            <div class="row">
                                <div class="col-lg-4">
                                    <FormKit v-model="province" type="select" placeholder="Chọn Tỉnh" label="Chọn Tỉnh"
                                        name="province" :options="provinces.map((item) => item.name)" />
                                </div>
                                <div class="col-lg-4">

                                    <!-- <v-select 
                            :options="districts.map((item) => item.name)" 
                            label="Chọn Quận" 
                            name="district"
                            :reduce="country => country.code" /> -->
                                    <FormKit v-model="district" type="select" label="Chọn Quận" name="district"
                                        :options="districts.map((item) => item.name)" />
                                </div>

                                <div class="col-lg-4">
                                    <FormKit v-model="ward" type="select" label="Chọn Huyện" name="ward"
                                        :options="wards.map((item) => item.name)" />
                                </div>
                            </div>
                        </div>
                    </FormKit>
                </div>
            </div>
        </div>
    </div>
</template>