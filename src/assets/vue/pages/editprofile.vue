<template>
<f7-page name="editprofile">
    <f7-navbar title="Edit Profile"></f7-navbar>
    
    <f7-list no-hairlines-md>
        <f7-list-input :value="computed_display_name" @input="computed_display_name = $event.target.value" name="computed_display_name" label="Name" type="text" placeholder="Your name" clear-button></f7-list-input>
        <f7-block-title>Allergies</f7-block-title>
        <f7-list no-hairlines-md>
            <f7-list-item checkbox name="gluten" :checked="computed_allergies.gluten" @change="onAllergyChange" title="Gluten"></f7-list-item>
            <f7-list-item checkbox name="dairy" :checked="computed_allergies.dairy" @change="onAllergyChange" title="Dairy"></f7-list-item>
            <f7-list-item checkbox name="soy" :checked="computed_allergies.soy" @change="onAllergyChange" title="Soy"></f7-list-item>
            <f7-list-item checkbox name="egg" :checked="computed_allergies.egg" @change="onAllergyChange" title="Eggs"></f7-list-item>
            <f7-list-item checkbox name="peanuts" :checked="computed_allergies.peanuts" @change="onAllergyChange" title="Peanuts / Treenuts"></f7-list-item>
            <f7-list-item checkbox name="seafood" :checked="computed_allergies.seafood" @change="onAllergyChange" title="Seafood"></f7-list-item>
        </f7-list>
    </f7-list>
    <f7-block>
        <f7-button outline @click="updateProfile">Update Profile</f7-button> 
    </f7-block>
</f7-page>
</template>

<script>
import firebase from 'firebase'
import {mixin} from '../../js/mixin'
export default {
    mixins: [mixin],
    data() {
        console.log("data display:" + this.$store.getters.display_name);
        return {
            display_name: null,
            allergies: {
                gluten: false,
                dairy: false,
                soy: false,
                egg: false,
                peanuts: false,
                seafood: false
              }
        }
    },
    computed: {
        computed_display_name: {
            get: function () {
                return this.$store.getters.display_name
            },
            set: function (newValue) {
                this.$store.commit('setDisplayName', newValue)
            }
        },
        computed_allergies: {
            get: function () {
                return this.$store.getters.allergies
            }
        }
    },
    watch: {},
    methods: {
        onAllergyChange: function (e) {
            console.log(e.target.checked, e.target.name)
            this.$store.getters.allergies[e.target.name] = e.target.checked;
        },
        updateProfile(){

            var user = firebase.auth().currentUser;       
            const self = this

            user.updateProfile({
                displayName:self.$store.getters.display_name,
            }).then(function(){
                firebase.database().ref('users/'+ user.uid).update({
                    display_name: self.$store.getters.display_name,
                    allergies: self.$store.getters.allergies
                })
                self.$store.commit('setAlertMessage', "Updated your profile");
            }).catch(err=>{
                console.log(err);
                self.$store.commit('setAlertMessage', err);
            })
        }

    }
}
</script>

<style scoped>
</style>
