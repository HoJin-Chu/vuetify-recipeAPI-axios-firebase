<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Meal Plans</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="http://source.unsplash.com/R1_0gSXks5Y" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">KETO</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">키토제닉 다이어트</h3>
                            <div>Keto 다이어트는 고지방, 적절한 단백질, 저 탄수화물 식단입니다. 식이 요법은 탄수화물보다 지방질을 태우도록 강요합니다.
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['Menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('keto')">Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="http://source.unsplash.com/Pw7st6DXLZQ" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">PALEO</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">팔레오 다이어트</h3>
                            <div>Paleo 식단은 구석기 시대에 인간이 이용할 수있는 유일한 식품으로 추정되는 식품의 유일한 소비 또는 소비를 요구합니다.
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['Menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('paleo')">Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img src="http://source.unsplash.com/r-dChNeNKk8" height="500px">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">VEGAN</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">베지테리언 다이어트</h3>
                            <div>완전 채식은 동물성 제품 사용을 삼가합니다. 비건 채식은 고기, 일기 제품, 계란 또는 기타 동물성 원료를 소비하지 않습니다.
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions v-if="['Menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('vegan')">Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name : 'HomePlans',
    methods: {
        showRecipes(plan){
            this.$store.dispatch('getRecipes',plan)
        }
    }
}
</script>

<style scoped>

</style>
