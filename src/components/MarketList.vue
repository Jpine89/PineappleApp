<script setup lang="ts">
    import { noopDirectiveTransform } from '@vue/compiler-core';
    import { ref, reactive} from 'vue';
    let expanded = ref(false);
    let lorem =  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    let test = 'Test'
    interface item {
        name: string;
        amount: number;
        price: number;
        rating: number;
        sold: string;
        expanded?: boolean;
    }

    class itemTest{
        name: string;
        amount: number;
        price: number;
        rating: number;
        sold: string;
        expanded?: boolean;

        constructor(itemName: string, amount?: number, price?: number) {
            this.name = itemName;
            this.amount = amount;
        }
    }
    let x = new itemTest("ItemTest1", 20);
    let y = new itemTest("ItemTest2", 20);
    let z = new itemTest("ItemTest3", 20);
    let itemListTest = reactive<Array<itemTest>>([x,y,z])
    // let itemListTest: Array<itemTest> = 
    // [
    //     x
    // ];


    const itemList = ref<Array<item>>([
        {name: "item1", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item2", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item3", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item4", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item5", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item6", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item7", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item8", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item9", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item10", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item11", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item12", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item13", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item14", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item15", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item16", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item17", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item18", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item19", amount: 10, price: 20, rating: 5, sold: "no"},
        {name: "item20", amount: 10, price: 20, rating: 5, sold: "no"}
        ])

</script>


<template>

    <div v-for="item in itemListTest">
        <q-card style="margin-bottom: 8px; background-color:#1abc9c;">
            <q-card-actions >
                <div class="text-h5">{{item.name}}</div>
                <div class="text-h5 q-ml-md">${{item.amount}}</div>
                <q-space />

            
                <q-btn
                    color="black"
                    round
                    flat
                    dense
                    :icon="item.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                    @click="item.expanded = !item.expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="item.expanded">
                    <q-separator />
                    <q-card-section class="text-subitle2">
                        <div class="row">
                            <div class="col">test</div>
                            <div class="col">test2</div>
                            <div class="col">Test3</div>
                        </div>
                        <div class="row">
                            <div class="col">test</div>
                            <div class="col">test2</div>
                            <div class="col">Test3</div>
                        </div>
                    </q-card-section>
                </div>
            </q-slide-transition>
        </q-card>
    </div>

</template>


<style scoped>
    /* .row{
        margin-bottom: 8px;
    } */

    .q-card__actions {
    padding: 0px;
    }
</style>