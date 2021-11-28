<script>
    import { dataApi } from "../store";
    console.log('cok', $dataApi)
</script>

<div class="app-content content ">
    <div class="content-overlay" />
    <div class="header-navbar-shadow" />
    <div class="content-wrapper container-xxl p-0">
        <div class="content-header row">
            <div class="content-header-left col-md-9 col-12 mb-2">
                <div class="row breadcrumbs-top">
                    <div class="col-12">
                        <h2 class="content-header-title float-start mb-0">
                            Blog List
                        </h2>
                        <div class="breadcrumb-wrapper">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="index-2.html">Home</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">Pages</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">Blog</a>
                                </li>
                                <li class="breadcrumb-item active">List</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="content-header-right text-md-end col-md-3 col-12 d-md-block d-none"
            >
                <div class="mb-1 breadcrumb-right">
                    <div class="dropdown">
                        <button
                            class="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle waves-effect waves-float waves-light"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="feather feather-grid"
                                ><rect x="3" y="3" width="7" height="7" /><rect
                                    x="14"
                                    y="3"
                                    width="7"
                                    height="7"
                                /><rect
                                    x="14"
                                    y="14"
                                    width="7"
                                    height="7"
                                /><rect
                                    x="3"
                                    y="14"
                                    width="7"
                                    height="7"
                                /></svg
                            ></button
                        >
                        <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="app-todo.html"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-check-square me-1"
                                    ><polyline points="9 11 12 14 22 4" /><path
                                        d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                                    /></svg
                                ><span class="align-middle">Todo</span></a
                            ><a class="dropdown-item" href="app-chat.html"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-message-square me-1"
                                    ><path
                                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                    /></svg
                                ><span class="align-middle">Chat</span></a
                            ><a class="dropdown-item" href="app-email.html"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-mail me-1"
                                    ><path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                                    /><polyline points="22,6 12,13 2,6" /></svg
                                ><span class="align-middle">Email</span></a
                            ><a class="dropdown-item" href="app-calendar.html"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="feather feather-calendar me-1"
                                    ><rect
                                        x="3"
                                        y="4"
                                        width="18"
                                        height="18"
                                        rx="2"
                                        ry="2"
                                    /><line
                                        x1="16"
                                        y1="2"
                                        x2="16"
                                        y2="6"
                                    /><line x1="8" y1="2" x2="8" y2="6" /><line
                                        x1="3"
                                        y1="10"
                                        x2="21"
                                        y2="10"
                                    /></svg
                                ><span class="align-middle">Calendar</span></a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-detached content-left">
            <div class="content-body">
                <!-- Blog List -->
                <div class="blog-list-wrapper">
                    <!-- Blog List Items -->
                    <div class="row">
                        <div class="col-md-6 col-12">
                            <div class="card">
                                <a href="page-blog-detail.html">
                                    <img
                                        class="card-img-top img-fluid"
                                        src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/slider/02.jpg"
                                        alt="Blog Post pic"
                                    />
                                </a>
                                <div class="card-body">
                                    <h4 class="card-title">
                                        <a
                                            href="page-blog-detail.html"
                                            class="blog-title-truncate text-body-heading"
                                            >The Best Features Coming to iOS and
                                            Web design</a
                                        >
                                    </h4>
                                    <div class="d-flex">
                                        <div class="avatar me-50">
                                            <img
                                                src="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/app-assets/images/portrait/small/avatar-s-7.jpg"
                                                alt="Avatar"
                                                width="24"
                                                height="24"
                                            />
                                        </div>
                                        <div class="author-info">
                                            <small class="text-muted me-25"
                                                >by</small
                                            >
                                            <small
                                                ><a href="#" class="text-body"
                                                    >Ghani Pradita</a
                                                ></small
                                            >
                                            <span class="text-muted ms-50 me-25"
                                                >|</span
                                            >
                                            <small class="text-muted"
                                                >Jan 10, 2020</small
                                            >
                                        </div>
                                    </div>
                                    <div class="my-1 py-25">
                                        <a href="#">
                                            <span
                                                class="badge rounded-pill badge-light-info me-50"
                                                >Quote</span
                                            >
                                        </a>
                                        <a href="#">
                                            <span
                                                class="badge rounded-pill badge-light-primary"
                                                >Fashion</span
                                            >
                                        </a>
                                    </div>
                                    <p class="card-text blog-content-truncate">
                                        Donut fruitcake soufflé apple pie candy
                                        canes jujubes croissant chocolate bar
                                        ice cream.
                                    </p>
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <a
                                            href="page-blog-detail.html#blogComment"
                                        >
                                            <div
                                                class="d-flex align-items-center"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-message-square font-medium-1 text-body me-50"
                                                    ><path
                                                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                                                    /></svg
                                                >
                                                <span class="text-body fw-bold"
                                                    >76 Comments</span
                                                >
                                            </div>
                                        </a>
                                        <a
                                            href="page-blog-detail.html"
                                            class="fw-bold">Read More</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/ Blog List Items -->

                    <!-- Pagination -->
                    <div class="row">
                        <div class="col-12">
                            <nav aria-label="Page navigation">
                                <ul
                                    class="pagination justify-content-center mt-2"
                                >
                                    <li class="page-item prev-item">
                                        <a class="page-link" href="#" />
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">3</a>
                                    </li>
                                    <li
                                        class="page-item active"
                                        aria-current="page"
                                    >
                                        <a class="page-link" href="#">4</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">5</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">6</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">7</a>
                                    </li>
                                    <li class="page-item next-item">
                                        <a class="page-link" href="#" />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!--/ Pagination -->
                </div>
                <!--/ Blog List -->
            </div>
        </div>
    </div>
</div>
