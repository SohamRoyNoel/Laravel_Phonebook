<template>
    <nav class="panel column is-offset-2 is-8">
        <p class="panel-heading">
            PhoneBook
        <div class="panel-block">
            <button class="button is-link is-outlined is-fullwidth">
                Add New
            </button>
        </div>
        </p>
        <div class="panel-block">
            <p class="control has-icons-left">
                <input class="input is-small" type="text" placeholder="search">
                <span class="icon is-small is-left">
        <i class="fas fa-search" aria-hidden="true"></i>
      </span>
            </p>
        </div>
        <a class="panel-block">
            <span class="column is-9">
                marksheet
            </span>
            <span class="panel-icon column is-1">
                 <i class="has-text-danger far fa-trash-alt"></i>
            </span>
            <span class="panel-icon column is-1">
                 <i class="has-text-primary far fa-edit"></i>
            </span>
            <span class="panel-icon column is-1">
                 <i class="has-text-warning fas fa-eye"></i>
            </span>
        </a>

    </nav>
</template>