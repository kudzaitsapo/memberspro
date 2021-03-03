<template>
    <b-container fluid class="bv-example-row mt-4">
        <b-row v-for="(members, index) in groupMembers" :key="index">
            <b-col cols="3" v-for="member in members" :key="member.id">
                <b-card
                    :title="member.firstName  + ' ' + member.lastName[0] + '.'"
                    :img-src="member.picture"
                    class="mt-4"
                >
                    <b-card-text>
                        <h5></h5>
                    </b-card-text>
                    <b-button :to="{ name: 'Profile', params: { id: member.id }}" variant="primary">View Profile</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>

</template>

<script>

export default {
    name: 'PaginatedMembers',
    props: ['groupMembers']
}
</script>